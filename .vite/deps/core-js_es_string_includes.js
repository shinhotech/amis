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
import "./chunk-4N5PL5QB.js";
import {
  require_export,
  require_function_uncurry_this,
  require_require_object_coercible
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.string.includes.js
var require_es_string_includes = __commonJS({
  "node_modules/core-js/modules/es.string.includes.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var notARegExp = require_not_a_regexp();
    var requireObjectCoercible = require_require_object_coercible();
    var toString = require_to_string();
    var correctIsRegExpLogic = require_correct_is_regexp_logic();
    var stringIndexOf = uncurryThis("".indexOf);
    $({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
      includes: function includes(searchString) {
        return !!~stringIndexOf(
          toString(requireObjectCoercible(this)),
          toString(notARegExp(searchString)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    });
  }
});

// node_modules/core-js/es/string/includes.js
var require_includes = __commonJS({
  "node_modules/core-js/es/string/includes.js"(exports, module) {
    require_es_string_includes();
    var entryUnbind = require_entry_unbind();
    module.exports = entryUnbind("String", "includes");
  }
});
export default require_includes();
//# sourceMappingURL=core-js_es_string_includes.js.map
