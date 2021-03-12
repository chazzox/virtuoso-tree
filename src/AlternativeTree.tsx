// @ts-nocheck
import React from 'react';
import { Virtuoso } from 'react-virtuoso';

/* TODO:
	(1): Learn how to use generics in typescript (whoops)
		- https://www.typescriptlang.org/docs/handbook/utility-types.html
	(2): Add header and footer components
	(3): Add customisable collapse handles (with optional defaults)
*/

interface AltTreeComponentProps {
	itemData: any[];
	itemHeight?: number;
	overscan?: number;
}

export const AlternativeTree: React.FC<AltTreeComponentProps> = ({ itemHeight }) => {
	const list = React.useRef();
	const reComputeTree = (newState) => {};
	const computeTree = () => {};

	const getItemData = () => {};

	return <Virtuoso fixedItemHeight={itemHeight} />;
};
