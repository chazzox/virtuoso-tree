import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FixedSizeTree } from '../.';

import './index.scss';

let nodeId = 0;

interface TreeNode {
	children: TreeNode[];
	id: string;
	name: string;
}

const createNode = (depth: number = 0): TreeNode => {
	const node: TreeNode = {
		children: [],
		id: `${nodeId}`,
		name: `test-${nodeId}`
	};

	nodeId += 1;

	if (depth === 5) {
		return node;
	}

	for (let i = 0; i < 10; i++) {
		node.children.push(createNode(depth + 1));
	}

	return node;
};

const rootNode = Array.from({ length: 10 }, () => createNode());

const getNodeData = (node: TreeNode, nestingLevel: number) => ({
	data: {
		id: node.id.toString(),
		isLeaf: node.children.length === 0,
		isOpenByDefault: true,
		name: node.name,
		nestingLevel
	},
	nestingLevel,
	node
});

function* treeWalker() {
	for (let rootNodeIndex = 0; rootNodeIndex < rootNode.length; rootNodeIndex++) {
		yield getNodeData(rootNode[rootNodeIndex], 0);
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	while (true) {
		const parentMeta = yield;

		// eslint-disable-next-line @typescript-eslint/prefer-for-of
		for (let i = 0; i < parentMeta.node.children.length; i++) {
			yield getNodeData(parentMeta.node.children[i], parentMeta.nestingLevel + 1);
		}
	}
}

const App = () => {
	const [postData, setPostData] = React.useState<GeneralPostResponse | []>([]);

	React.useEffect(() => {
		fetch(
			'https://www.reddit.com/r/AskReddit/comments/lj0dby/which_celebrity_got_cancelled_and_you_genuinely/.json?limit=25'
		)
			.then(res => res.json())
			.then((json: GeneralPostResponse) => {
				setPostData(json);
			});

		const iter = treeWalker();
		const { value: root } = iter.next();
		console.log(root);
	}, []);

	return (
		<div className="container">
			{postData.length == 2 && (
				<>
					<h1>Tree demo using reddit comments</h1>
					<h3>
						Using post {postData[0].data.children[0].data.id}{' '}
						<a href="https://www.reddit.com/r/AskReddit/comments/lj0dby/which_celebrity_got_cancelled_and_you_genuinely/">
							(click here to redirect)
						</a>
					</h3>
					<FixedSizeTree treeWalker={treeWalker} itemSize={40} width="100%">
						{Node}
					</FixedSizeTree>
				</>
			)}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
