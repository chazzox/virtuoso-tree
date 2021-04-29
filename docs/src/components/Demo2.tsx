import * as React from 'react';
import { AlternativeTree } from '../../../dist';

const Demo2: React.FC<{ treeWalker: any }> = ({ treeWalker }) => {
	return (
		<>
			<AlternativeTree treeWalker={treeWalker} itemComponent={Item} />
		</>
	);
};

const Item = (props: any) => {
	return <>pog {props}</>;
};

export default Demo2;
