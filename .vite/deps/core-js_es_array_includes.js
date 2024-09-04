import {
  require_entry_unbind
} from "./chunk-LHENQYFG.js";
import {
  require_add_to_unscopables
} from "./chunk-7UZIDV6O.js";
import "./chunk-BJRSW6D6.js";
import "./chunk-I2VOE425.js";
import {
  require_array_includes,
  require_export,
  require_fails
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.array.includes.js
var require_es_array_includes = __commonJS({
  "node_modules/core-js/modules/es.array.includes.js"() {
    "use strict";
    var $ = require_export();
    var $includes = require_array_includes().includes;
    var fails = require_fails();
    var addToUnscopables = require_add_to_unscopables();
    var BROKEN_ON_SPARSE = fails(function() {
      return !Array(1).includes();
    });
    $({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
      includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    addToUnscopables("includes");
  }
});

// node_modules/core-js/es/array/includes.js
var require_includes = __commonJS({
  "node_modules/core-js/es/array/includes.js"(exports, module) {
    require_es_array_includes();
    var entryUnbind = require_entry_unbind();
    module.exports = entryUnbind("Array", "includes");
  }
});
export default require_includes();
//# sourceMappingURL=core-js_es_array_includes.js.map
