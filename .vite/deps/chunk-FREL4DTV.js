import {
  require_create_property_descriptor,
  require_descriptors,
  require_object_define_property
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js/internals/create-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      if (DESCRIPTORS)
        definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else
        object[key] = value;
    };
  }
});

export {
  require_create_property
};
//# sourceMappingURL=chunk-FREL4DTV.js.map
