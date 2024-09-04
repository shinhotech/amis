import {
  require_path
} from "./chunk-XESFWV52.js";
import {
  require_object_keys
} from "./chunk-I2VOE425.js";
import {
  require_descriptors,
  require_export,
  require_fails,
  require_function_call,
  require_function_uncurry_this,
  require_indexed_object,
  require_object_get_own_property_symbols,
  require_object_property_is_enumerable,
  require_to_object
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var fails = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis([].concat);
    module.exports = !$assign || fails(function() {
      if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol("assign detection");
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/modules/es.object.assign.js
var require_es_object_assign = __commonJS({
  "node_modules/core-js/modules/es.object.assign.js"() {
    "use strict";
    var $ = require_export();
    var assign = require_object_assign();
    $({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
      assign
    });
  }
});

// node_modules/core-js/es/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/es/object/assign.js"(exports, module) {
    require_es_object_assign();
    var path = require_path();
    module.exports = path.Object.assign;
  }
});
export default require_assign();
//# sourceMappingURL=core-js_es_object_assign.js.map
