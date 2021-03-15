// @ts-nocheck
import * as React from 'react';
import { Virtuoso } from 'react-virtuoso';

/* TODO:
	(1): Learn how to use generics in typescript (whoops)
		- https://www.typescriptlang.org/docs/handbook/utility-types.html
	(2): Add header and footer components
	(3): Add customisable collapse handles (with optional defaults)
*/

interface AltTreeComponentProps {
	itemData: any[];
	/**
	 * If you can guarantee the height of all elements then set this variable, it will increase performance as virtuoso tree will not have to measure the content
	 */
	itemHeight?: number;
	/**
	 * Enables chunking by n number of pixels
	 */
	overscan?: number;
}

export const AlternativeTree: React.FC<AltTreeComponentProps> = ({ itemHeight, overscan }) => {
	const list = React.useRef();
	const reComputeTree = (newState) => {};
	const computeTree = () => {};

	const getItemData = () => {};

	return <>Tree</>;
	// return <Virtuoso fixedItemHeight={itemHeight} overscan={overscan} />;
};
