import {
  require_classof_raw,
  require_function_uncurry_this
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

export {
  require_function_uncurry_this_clause
};
//# sourceMappingURL=chunk-3DWRR3NE.js.map
