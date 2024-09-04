import {
  require_path
} from "./chunk-XESFWV52.js";
import {
  require_object_keys
} from "./chunk-I2VOE425.js";
import {
  require_export,
  require_fails,
  require_to_object
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.object.keys.js
var require_es_object_keys = __commonJS({
  "node_modules/core-js/modules/es.object.keys.js"() {
    "use strict";
    var $ = require_export();
    var toObject = require_to_object();
    var nativeKeys = require_object_keys();
    var fails = require_fails();
    var FAILS_ON_PRIMITIVES = fails(function() {
      nativeKeys(1);
    });
    $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys(it) {
        return nativeKeys(toObject(it));
      }
    });
  }
});

// node_modules/core-js/es/object/keys.js
var require_keys = __commonJS({
  "node_modules/core-js/es/object/keys.js"(exports, module) {
    require_es_object_keys();
    var path = require_path();
    module.exports = path.Object.keys;
  }
});
export default require_keys();
//# sourceMappingURL=core-js_es_object_keys.js.map
