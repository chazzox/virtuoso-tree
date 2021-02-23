import React from 'react';
import { Virtuoso } from 'react-virtuoso';

interface ListPropTypes {
  itemHeight?: number;
  endReached?: (num: number) => any;
  dataGenerator: Generator<any, any, any>;
  style?: React.CSSProperties;
}

// possible features
// 1 - reddit style collapsing

export const FixedSizeTree: React.FC<ListPropTypes> = ({
  itemHeight,
  endReached,
  dataGenerator,
  style,
}) => {
  // @ts-ignore
  const [treeState, setTreeState] = React.useState({});
  // @ts-ignore
  const [initialised, setIsInitialised] = React.useState({});

  // generate initial tree

  // update the tree

  // get the tree items from state

  React.useEffect(() => {
    // if tree has not been built then run build tree, otherwise just recompute it
  }, [dataGenerator]);

  return (
    <>
      <Virtuoso
        style={style}
        fixedItemHeight={itemHeight}
        endReached={endReached}
      />
    </>
  );
};
