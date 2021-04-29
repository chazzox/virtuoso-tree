import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

/* TODO:
	(1): Learn how to use generics in typescript (whoops)
		- https://www.typescriptlang.org/docs/handbook/utility-types.html
	(2): Add header and footer components
	(3): Add customisable collapse handles (with optional defaults)
*/

interface AltTreeComponentProps {
	treeWalker: Generator;
	/**
	 * If you can guarantee the height of all elements then set this variable, it will increase performance as virtuoso tree will not have to measure the content
	 */
	itemHeight?: number;
	/**
	 * Enables chunking by n number of pixels
	 */
	overscan?: number;
	/**
	 * The component that is used by Virtuoso to render each item
	 */
	itemComponent: React.ReactNode;
	placeholder?: React.ReactNode;

	listRef?: React.Ref<VirtuosoHandle>;
}

export const AlternativeTree: React.FC<AltTreeComponentProps> = ({ treeWalker, placeholder, listRef }) => {
	const list = React.useRef<VirtuosoHandle>(null);
	// internal state/variables

	const [order] = React.useState([]);

	const [attachRefs, updateAttachRefs] = React.useState<React.Ref<VirtuosoHandle>>(mergeRefs([list, listRef || null]));

	// @ts-expect-error
	const [records] = React.useState([]);

	// Component methods

	// @ts-expect-error
	const reComputeTree = () => {};

	// @ts-expect-error
	const computeTree = () => {};

	// @ts-expect-error
	const getRecordData = () => {};

	// @ts-expect-error
	const getItemData = () => {};

	// @ts-expect-error
	const scrollTo = (scrollOffset: number) => {
		list.current?.scrollTo({ top: scrollOffset });
	};

	// @ts-expect-error
	const scrollToIndex = (id: string, align: any) => {
		// @ts-expect-error
		list.current?.scrollToIndex({ align: 'start', index: order!.indexOf(id), behavior: 'smooth' });
	};

	// React lifecycles
	React.useEffect(() => {
		updateAttachRefs(mergeRefs([list, listRef || null]));
	}, [listRef]);

	React.useEffect(() => {
		console.log('treeWalker init');
	}, [treeWalker]);

	return placeholder && order!.length === 0 ? <>{placeholder}</> : <Virtuoso ref={attachRefs} />;
};
