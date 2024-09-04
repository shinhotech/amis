import {
  require_function_uncurry_this,
  require_global_this
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var uncurryThis = require_function_uncurry_this();
    module.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(globalThis[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

export {
  require_entry_unbind
};
//# sourceMappingURL=chunk-LHENQYFG.js.map
