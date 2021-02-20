import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FixedSizeNodeData, FixedSizeNodePublicState, FixedSizeTree, TreeWalkerValue } from '../.';

import './index.scss';
import { NodeComponentProps, TreeWalkerType } from '../dist/Tree';

type TreeNode = Readonly<{
	children: TreeNode[];
	id: number;
	name: string;
}>;

type TreeData = FixedSizeNodeData &
	Readonly<{
		isLeaf: boolean;
		name: string;
		nestingLevel: number;
	}>;

let nodeId = 0;

const createNode = (depth: number = 0): TreeNode => {
	const node: TreeNode = {
		children: [],
		id: nodeId,
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

const defaultTextStyle = { marginLeft: 10 };
const defaultButtonStyle = { fontFamily: 'Courier New' };

type NodeMeta = Readonly<{
	nestingLevel: number;
	node: TreeNode;
}>;

const getNodeData = (node: TreeNode, nestingLevel: number): TreeWalkerValue<TreeData, NodeMeta> => ({
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

function* treeWalker(): ReturnType<TreeWalkerType<TreeData, NodeMeta>> {
	console.log(rootNode);
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

const Node: React.FC<NodeComponentProps<TreeData, FixedSizeNodePublicState<TreeData>>> = ({
	data: { isLeaf, name, nestingLevel },
	isOpen,
	style,
	setOpen
}) => (
	<div
		style={{
			...style,
			alignItems: 'center',
			display: 'flex',
			marginLeft: nestingLevel * 30 + (isLeaf ? 48 : 0)
		}}
	>
		{!isLeaf && (
			<div>
				<button type="button" onClick={() => setOpen(!isOpen)} style={defaultButtonStyle}>
					{isOpen ? '-' : '+'}
				</button>
			</div>
		)}
		<div style={defaultTextStyle}>{name}</div>
	</div>
);

type TreePresenterProps = Readonly<{
	itemSize: number;
}>;

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
					<FixedSizeTree treeWalker={treeWalker} itemSize={40} height={600} width="100%">
						{Node}
					</FixedSizeTree>
				</>
			)}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
