'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactVirtuoso = require('react-virtuoso');

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
  return React.createElement(React.Fragment, null, React.createElement(reactVirtuoso.Virtuoso, {
    style: style,
    fixedItemHeight: itemHeight,
    endReached: endReached
  }));
};

exports.FixedSizeTree = FixedSizeTree;
//# sourceMappingURL=virtuoso-tree.cjs.development.js.map
