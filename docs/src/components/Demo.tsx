import * as React from 'react';
import { FixedSizeTree } from '../../../dist';

interface TreeNode {
	children: TreeNode[];
	id: string;
	name: string;
}

let nodeId = 0;

const createNode = (depth: number = 0): TreeNode => {
	const node: TreeNode = {
		children: [],
		id: `${nodeId}`,
		name: `test-${nodeId}`
	};

	nodeId += 1;

	if (depth === 3) {
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

// @ts-expect-error
const Node: React.FC = ({ data: { isLeaf, name, nestingLevel }, isOpen, style, setOpen }) => (
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
				<button type="button" onClick={() => setOpen(!isOpen)}>
					{isOpen ? '-' : '+'}
				</button>
			</div>
		)}
		<div>{name}</div>
	</div>
);

const Demo = () => {
	return (
		// @ts-expect-error
		<FixedSizeTree height={500} treeWalker={treeWalker} itemSize={40} width="100%">
			{Node}
		</FixedSizeTree>
	);
};
export default Demo;
