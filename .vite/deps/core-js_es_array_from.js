import {
  require_create_property
} from "./chunk-FREL4DTV.js";
import {
  require_check_correctness_of_iteration,
  require_es_string_iterator,
  require_get_iterator,
  require_get_iterator_method,
  require_is_array_iterator_method,
  require_iterator_close
} from "./chunk-QYEO5PFC.js";
import "./chunk-2WVYYRZM.js";
import "./chunk-W7H3GI4A.js";
import "./chunk-MWZRPBCH.js";
import {
  require_path
} from "./chunk-XESFWV52.js";
import {
  require_is_constructor
} from "./chunk-ODYP7P2M.js";
import {
  require_function_bind_context
} from "./chunk-BHJ6YJSC.js";
import "./chunk-3DWRR3NE.js";
import "./chunk-4N5PL5QB.js";
import "./chunk-BJRSW6D6.js";
import "./chunk-I2VOE425.js";
import {
  require_an_object,
  require_export,
  require_function_call,
  require_length_of_array_like,
  require_to_object
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/core-js/internals/array-from.js
var require_array_from = __commonJS({
  "node_modules/core-js/internals/array-from.js"(exports, module) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var toObject = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor = require_is_constructor();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array = Array;
    module.exports = function from(arrayLike) {
      var O = toObject(arrayLike);
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        result = IS_CONSTRUCTOR ? new this() : [];
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        for (; !(step = call(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// node_modules/core-js/modules/es.array.from.js
var require_es_array_from = __commonJS({
  "node_modules/core-js/modules/es.array.from.js"() {
    "use strict";
    var $ = require_export();
    var from = require_array_from();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
      Array.from(iterable);
    });
    $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
      from
    });
  }
});

// node_modules/core-js/es/array/from.js
var require_from = __commonJS({
  "node_modules/core-js/es/array/from.js"(exports, module) {
    require_es_string_iterator();
    require_es_array_from();
    var path = require_path();
    module.exports = path.Array.from;
  }
});
export default require_from();
//# sourceMappingURL=core-js_es_array_from.js.map
