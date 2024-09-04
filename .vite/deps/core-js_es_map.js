import {
  require_collection,
  require_collection_strong
} from "./chunk-5WHSOTRO.js";
import "./chunk-GBPZAPZG.js";
import {
  require_es_array_iterator,
  require_iterate
} from "./chunk-O7XTLLJQ.js";
import {
  require_es_object_to_string
} from "./chunk-E3BTAHU5.js";
import {
  require_es_string_iterator
} from "./chunk-QYEO5PFC.js";
import "./chunk-2WVYYRZM.js";
import "./chunk-W7H3GI4A.js";
import "./chunk-MWZRPBCH.js";
import {
  require_path
} from "./chunk-XESFWV52.js";
import "./chunk-7UZIDV6O.js";
import "./chunk-BHJ6YJSC.js";
import "./chunk-3DWRR3NE.js";
import "./chunk-4N5PL5QB.js";
import "./chunk-BJRSW6D6.js";
import "./chunk-I2VOE425.js";
import {
  require_a_callable,
  require_export,
  require_fails,
  require_function_uncurry_this,
  require_is_pure,
  require_require_object_coercible
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/modules/es.map.constructor.js
var require_es_map_constructor = __commonJS({
  "node_modules/core-js/modules/es.map.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Map", function(init) {
      return function Map2() {
        return init(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js/modules/es.map.js
var require_es_map = __commonJS({
  "node_modules/core-js/modules/es.map.js"() {
    "use strict";
    require_es_map_constructor();
  }
});

// node_modules/core-js/internals/map-helpers.js
var require_map_helpers = __commonJS({
  "node_modules/core-js/internals/map-helpers.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var MapPrototype = Map.prototype;
    module.exports = {
      // eslint-disable-next-line es/no-map -- safe
      Map,
      set: uncurryThis(MapPrototype.set),
      get: uncurryThis(MapPrototype.get),
      has: uncurryThis(MapPrototype.has),
      remove: uncurryThis(MapPrototype["delete"]),
      proto: MapPrototype
    };
  }
});

// node_modules/core-js/modules/es.map.group-by.js
var require_es_map_group_by = __commonJS({
  "node_modules/core-js/modules/es.map.group-by.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    var requireObjectCoercible = require_require_object_coercible();
    var iterate = require_iterate();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var fails = require_fails();
    var Map2 = MapHelpers.Map;
    var has = MapHelpers.has;
    var get = MapHelpers.get;
    var set = MapHelpers.set;
    var push = uncurryThis([].push);
    var DOES_NOT_WORK_WITH_PRIMITIVES = IS_PURE || fails(function() {
      return Map2.groupBy("ab", function(it) {
        return it;
      }).get("a").length !== 1;
    });
    $({ target: "Map", stat: true, forced: IS_PURE || DOES_NOT_WORK_WITH_PRIMITIVES }, {
      groupBy: function groupBy(items, callbackfn) {
        requireObjectCoercible(items);
        aCallable(callbackfn);
        var map = new Map2();
        var k = 0;
        iterate(items, function(value) {
          var key = callbackfn(value, k++);
          if (!has(map, key))
            set(map, key, [value]);
          else
            push(get(map, key), value);
        });
        return map;
      }
    });
  }
});

// node_modules/core-js/es/map/index.js
var require_map = __commonJS({
  "node_modules/core-js/es/map/index.js"(exports, module) {
    require_es_array_iterator();
    require_es_map();
    require_es_map_group_by();
    require_es_object_to_string();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Map;
  }
});
export default require_map();
//# sourceMappingURL=core-js_es_map.js.map
