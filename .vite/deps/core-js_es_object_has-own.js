import {
  require_path
} from "./chunk-XESFWV52.js";
import {
  require_export,
  require_has_own_property
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.object.has-own.js
var require_es_object_has_own = __commonJS({
  "node_modules/core-js/modules/es.object.has-own.js"() {
    "use strict";
    var $ = require_export();
    var hasOwn = require_has_own_property();
    $({ target: "Object", stat: true }, {
      hasOwn
    });
  }
});

// node_modules/core-js/es/object/has-own.js
var require_has_own = __commonJS({
  "node_modules/core-js/es/object/has-own.js"(exports, module) {
    require_es_object_has_own();
    var path = require_path();
    module.exports = path.Object.hasOwn;
  }
});
export default require_has_own();
//# sourceMappingURL=core-js_es_object_has-own.js.map
