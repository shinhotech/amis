import {
  require_correct_is_regexp_logic,
  require_not_a_regexp
} from "./chunk-NZJ7OD6B.js";
import "./chunk-M4WY5BWB.js";
import {
  require_to_string
} from "./chunk-MWZRPBCH.js";
import {
  require_entry_unbind
} from "./chunk-LHENQYFG.js";
import {
  require_function_uncurry_this_clause
} from "./chunk-3DWRR3NE.js";
import "./chunk-4N5PL5QB.js";
import {
  require_export,
  require_is_pure,
  require_object_get_own_property_descriptor,
  require_require_object_coercible,
  require_to_length
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.string.starts-with.js
var require_es_string_starts_with = __commonJS({
  "node_modules/core-js/modules/es.string.starts-with.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this_clause();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var toLength = require_to_length();
    var toString = require_to_string();
    var notARegExp = require_not_a_regexp();
    var requireObjectCoercible = require_require_object_coercible();
    var correctIsRegExpLogic = require_correct_is_regexp_logic();
    var IS_PURE = require_is_pure();
    var stringSlice = uncurryThis("".slice);
    var min = Math.min;
    var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
    var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
      var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
      return descriptor && !descriptor.writable;
    }();
    $({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      startsWith: function startsWith(searchString) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : void 0, that.length));
        var search = toString(searchString);
        return stringSlice(that, index, index + search.length) === search;
      }
    });
  }
});

// node_modules/core-js/es/string/starts-with.js
var require_starts_with = __commonJS({
  "node_modules/core-js/es/string/starts-with.js"(exports, module) {
    require_es_string_starts_with();
    var entryUnbind = require_entry_unbind();
    module.exports = entryUnbind("String", "startsWith");
  }
});
export default require_starts_with();
//# sourceMappingURL=core-js_es_string_starts-with.js.map
