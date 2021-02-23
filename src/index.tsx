import React from 'react';
import { Virtuoso } from 'react-virtuoso';

interface ListPropTypes {
  itemHeight?: number;
  endReached?: (num: number) => any;
  dataGenerator: Generator<any, any, any>;
  style?: React.CSSProperties;
}

const FixedSizeList: React.FC<ListPropTypes> = ({
  itemHeight,
  endReached,
  dataGenerator,
  style,
}) => {
  // @ts-ignore
  const [treeState, setTreeState] = React.useState({});

  // generate initial tree

  // update the tree

  // get the tree items from state

  React.useEffect(() => {}, [dataGenerator]);

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

export default FixedSizeList;
