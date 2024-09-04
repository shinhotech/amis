import {
  require_path
} from "./chunk-XESFWV52.js";
import {
  require_export
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.number.is-nan.js
var require_es_number_is_nan = __commonJS({
  "node_modules/core-js/modules/es.number.is-nan.js"() {
    "use strict";
    var $ = require_export();
    $({ target: "Number", stat: true }, {
      isNaN: function isNaN(number) {
        return number !== number;
      }
    });
  }
});

// node_modules/core-js/es/number/is-nan.js
var require_is_nan = __commonJS({
  "node_modules/core-js/es/number/is-nan.js"(exports, module) {
    require_es_number_is_nan();
    var path = require_path();
    module.exports = path.Number.isNaN;
  }
});
export default require_is_nan();
//# sourceMappingURL=core-js_es_number_is-nan.js.map
