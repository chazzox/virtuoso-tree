import * as React from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

interface NodeType {
	data: {};
	nestingLevel: number;
}

interface AltTreeComponentProps {
	treeWalker: Generator<NodeType | undefined, undefined, NodeType>;
	/** If you can guarantee the height of all elements then set this variable, it will increase performance as virtuoso tree will not have to measure the content */
	itemHeight?: number;
	/** Enables chunking by n number of pixels */
	overscan?: number;
	/** The component that is used by Virtuoso to render each item */
	itemComponent: React.ReactNode;
	placeholder?: React.ReactNode;

	listRef?: React.Ref<VirtuosoHandle>;
}

/**
 * What does this component need to do?
 * compute node values for generator function
 * add ability to update values on a node
 * memoise computations (maybe use the useMemo hook?)
 */

interface ListObject {
	nestingLevel: number;
}

// @ts-expect-error
const createRecord = ({ nestingLevel }: ListObject) => ({ nestingLevel: nestingLevel });

export const AlternativeTree: React.FC<AltTreeComponentProps> = ({ treeWalker, placeholder }) => {
	// internal state/variables

	// @ts-expect-error
	const [order] = React.useState([]);

	// @ts-expect-error
	const [records] = React.useState([]);

	// Component methods

	// @ts-expect-error
	const reComputeTree = () => {};

	const computeTree = () => {
		// @ts-expect-error
		const iter = treeWalker();
		const { value: root } = iter.next();
		let currentRecord,
			// @ts-expect-error
			tempRecord = root;

		let isTraversingRoot = true;
		console.log(currentRecord);

		while (currentRecord !== null) {
			console.dir(currentRecord);
			const { value: next } = iter.next();
			if (next === undefined) {
				if (isTraversingRoot) {
					isTraversingRoot = false;
				}
			}
			currentRecord = next;
		}
	};

	// @ts-expect-error
	const getRecordData = () => {};

	// @ts-expect-error
	const getItemData = () => {};

	React.useEffect(() => {
		computeTree();
	}, []);

	return true ? <>{placeholder}</> : <Virtuoso />;
};
