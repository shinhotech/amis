import {
  require_prop_types
} from "./chunk-EGE5PBXS.js";
import {
  require_react_dom
} from "./chunk-2JRVN4QV.js";
import {
  require_react
} from "./chunk-L2H5Y3CP.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/react-overlays/esm/Portal.js
var import_prop_types = __toESM(require_prop_types());
var import_react_dom = __toESM(require_react_dom());
var import_react2 = __toESM(require_react());

// node_modules/dom-helpers/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/react-overlays/esm/useWaitForDOMRef.js
var import_react = __toESM(require_react());
var resolveContainerRef = function resolveContainerRef2(ref) {
  var _ref;
  if (typeof document === "undefined")
    return null;
  if (ref == null)
    return ownerDocument().body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType)
    return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0, import_react.useState)(function() {
    return resolveContainerRef(ref);
  }), resolvedRef = _useState[0], setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  (0, import_react.useEffect)(function() {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react.useEffect)(function() {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/react-overlays/esm/Portal.js
var propTypes = {
  /**
   * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: import_prop_types.default.any,
  onRendered: import_prop_types.default.func
};
var Portal = function Portal2(_ref) {
  var container = _ref.container, children = _ref.children, onRendered = _ref.onRendered;
  var resolvedContainer = useWaitForDOMRef(container, onRendered);
  return resolvedContainer ? import_react2.default.createElement(import_react2.default.Fragment, null, import_react_dom.default.createPortal(children, resolvedContainer)) : null;
};
Portal.displayName = "Portal";
Portal.propTypes = propTypes;
var Portal_default = Portal;
export {
  Portal_default as default
};
//# sourceMappingURL=react-overlays_Portal.js.map
