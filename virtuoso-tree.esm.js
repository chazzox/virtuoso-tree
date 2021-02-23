import React from 'react';
import { Virtuoso } from 'react-virtuoso';

// 1 - reddit style collapsing

var FixedSizeTree = function FixedSizeTree(_ref) {
  var itemHeight = _ref.itemHeight,
      endReached = _ref.endReached,
      dataGenerator = _ref.dataGenerator,
      style = _ref.style;

  // @ts-ignore
  var _React$useState = React.useState({});
 // @ts-ignore


  var _React$useState2 = React.useState({});
 // generate initial tree
  // update the tree
  // get the tree items from state


  React.useEffect(function () {// if tree has not been built then run build tree, otherwise just recompute it
  }, [dataGenerator]);
  return React.createElement(React.Fragment, null, React.createElement(Virtuoso, {
    style: style,
    fixedItemHeight: itemHeight,
    endReached: endReached
  }));
};

export { FixedSizeTree };
//# sourceMappingURL=virtuoso-tree.esm.js.map
