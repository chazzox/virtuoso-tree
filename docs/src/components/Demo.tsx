import * as React from 'react';
import { Tree } from '../../../dist';

const Node: React.FC = ({ data: { isLeaf, name, nestingLevel }, isOpen, style, setOpen }: any) => (
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

const Demo: React.FC<{ treeWalker: any }> = ({ treeWalker }) => {
	return (
		<Tree height={500} treeWalker={treeWalker} itemSize={40} width="100%">
			{Node}
		</Tree>
	);
};
export default Demo;
