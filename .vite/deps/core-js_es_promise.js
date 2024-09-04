import {
  require_an_instance,
  require_es_array_iterator,
  require_iterate,
  require_set_species
} from "./chunk-O7XTLLJQ.js";
import {
  require_array_slice,
  require_es_object_to_string
} from "./chunk-E3BTAHU5.js";
import {
  require_function_apply
} from "./chunk-AJQBDBO6.js";
import {
  require_check_correctness_of_iteration,
  require_es_string_iterator,
  require_object_get_prototype_of,
  require_object_set_prototype_of
} from "./chunk-QYEO5PFC.js";
import {
  require_set_to_string_tag
} from "./chunk-2WVYYRZM.js";
import "./chunk-W7H3GI4A.js";
import {
  require_to_string
} from "./chunk-MWZRPBCH.js";
import {
  require_path
} from "./chunk-XESFWV52.js";
import "./chunk-7UZIDV6O.js";
import {
  require_is_constructor
} from "./chunk-ODYP7P2M.js";
import {
  require_function_bind_context
} from "./chunk-BHJ6YJSC.js";
import "./chunk-3DWRR3NE.js";
import "./chunk-4N5PL5QB.js";
import {
  require_html,
  require_object_create
} from "./chunk-BJRSW6D6.js";
import "./chunk-I2VOE425.js";
import {
  require_a_callable,
  require_an_object,
  require_classof_raw,
  require_copy_constructor_properties,
  require_create_non_enumerable_property,
  require_create_property_descriptor,
  require_define_built_in,
  require_descriptors,
  require_document_create_element,
  require_environment_user_agent,
  require_environment_v8_version,
  require_export,
  require_fails,
  require_function_call,
  require_function_uncurry_this,
  require_get_built_in,
  require_global_this,
  require_has_own_property,
  require_inspect_source,
  require_internal_state,
  require_is_callable,
  require_is_forced,
  require_is_null_or_undefined,
  require_is_object,
  require_is_pure,
  require_object_is_prototype_of,
  require_try_to_string,
  require_well_known_symbol
} from "./chunk-NEKUUBZF.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/core-js/internals/install-error-cause.js
var require_install_error_cause = __commonJS({
  "node_modules/core-js/internals/install-error-cause.js"(exports, module) {
    "use strict";
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module.exports = function(O, options) {
      if (isObject(options) && "cause" in options) {
        createNonEnumerableProperty(O, "cause", options.cause);
      }
    };
  }
});

// node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/core-js/internals/error-stack-clear.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var $Error = Error;
    var replace = uncurryThis("".replace);
    var TEST = function(arg) {
      return String(new $Error(arg).stack);
    }("zxcasd");
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
        while (dropEntries--)
          stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      }
      return stack;
    };
  }
});

// node_modules/core-js/internals/error-stack-installable.js
var require_error_stack_installable = __commonJS({
  "node_modules/core-js/internals/error-stack-installable.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = !fails(function() {
      var error = new Error("a");
      if (!("stack" in error))
        return true;
      Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
      return error.stack !== 7;
    });
  }
});

// node_modules/core-js/internals/error-stack-install.js
var require_error_stack_install = __commonJS({
  "node_modules/core-js/internals/error-stack-install.js"(exports, module) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var clearErrorStack = require_error_stack_clear();
    var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
    var captureStackTrace = Error.captureStackTrace;
    module.exports = function(error, C, stack, dropEntries) {
      if (ERROR_STACK_INSTALLABLE) {
        if (captureStackTrace)
          captureStackTrace(error, C);
        else
          createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries));
      }
    };
  }
});

// node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/core-js/internals/normalize-string-argument.js"(exports, module) {
    "use strict";
    var toString = require_to_string();
    module.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/core-js/modules/es.aggregate-error.constructor.js
var require_es_aggregate_error_constructor = __commonJS({
  "node_modules/core-js/modules/es.aggregate-error.constructor.js"() {
    "use strict";
    var $ = require_export();
    var isPrototypeOf = require_object_is_prototype_of();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var copyConstructorProperties = require_copy_constructor_properties();
    var create = require_object_create();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    var installErrorCause = require_install_error_cause();
    var installErrorStack = require_error_stack_install();
    var iterate = require_iterate();
    var normalizeStringArgument = require_normalize_string_argument();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Error = Error;
    var push = [].push;
    var $AggregateError = function AggregateError(errors, message) {
      var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
      var that;
      if (setPrototypeOf) {
        that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
      } else {
        that = isInstance ? this : create(AggregateErrorPrototype);
        createNonEnumerableProperty(that, TO_STRING_TAG, "Error");
      }
      if (message !== void 0)
        createNonEnumerableProperty(that, "message", normalizeStringArgument(message));
      installErrorStack(that, $AggregateError, that.stack, 1);
      if (arguments.length > 2)
        installErrorCause(that, arguments[2]);
      var errorsArray = [];
      iterate(errors, push, { that: errorsArray });
      createNonEnumerableProperty(that, "errors", errorsArray);
      return that;
    };
    if (setPrototypeOf)
      setPrototypeOf($AggregateError, $Error);
    else
      copyConstructorProperties($AggregateError, $Error, { name: true });
    var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
      constructor: createPropertyDescriptor(1, $AggregateError),
      message: createPropertyDescriptor(1, ""),
      name: createPropertyDescriptor(1, "AggregateError")
    });
    $({ global: true, constructor: true, arity: 2 }, {
      AggregateError: $AggregateError
    });
  }
});

// node_modules/core-js/modules/es.aggregate-error.js
var require_es_aggregate_error = __commonJS({
  "node_modules/core-js/modules/es.aggregate-error.js"() {
    "use strict";
    require_es_aggregate_error_constructor();
  }
});

// node_modules/core-js/internals/environment.js
var require_environment = __commonJS({
  "node_modules/core-js/internals/environment.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var userAgent = require_environment_user_agent();
    var classof = require_classof_raw();
    var userAgentStartsWith = function(string) {
      return userAgent.slice(0, string.length) === string;
    };
    module.exports = function() {
      if (userAgentStartsWith("Bun/"))
        return "BUN";
      if (userAgentStartsWith("Cloudflare-Workers"))
        return "CLOUDFLARE";
      if (userAgentStartsWith("Deno/"))
        return "DENO";
      if (userAgentStartsWith("Node.js/"))
        return "NODE";
      if (globalThis.Bun && typeof Bun.version == "string")
        return "BUN";
      if (globalThis.Deno && typeof Deno.version == "object")
        return "DENO";
      if (classof(globalThis.process) === "process")
        return "NODE";
      if (globalThis.window && globalThis.document)
        return "BROWSER";
      return "REST";
    }();
  }
});

// node_modules/core-js/internals/environment-is-node.js
var require_environment_is_node = __commonJS({
  "node_modules/core-js/internals/environment-is-node.js"(exports, module) {
    "use strict";
    var ENVIRONMENT = require_environment();
    module.exports = ENVIRONMENT === "NODE";
  }
});

// node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "node_modules/core-js/internals/a-constructor.js"(exports, module) {
    "use strict";
    var isConstructor = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isConstructor(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a constructor");
    };
  }
});

// node_modules/core-js/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "node_modules/core-js/internals/species-constructor.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var aConstructor = require_a_constructor();
    var isNullOrUndefined = require_is_null_or_undefined();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function(O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
    };
  }
});

// node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/core-js/internals/validate-arguments-length.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    module.exports = function(passed, required) {
      if (passed < required)
        throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/core-js/internals/environment-is-ios.js
var require_environment_is_ios = __commonJS({
  "node_modules/core-js/internals/environment-is-ios.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
  }
});

// node_modules/core-js/internals/task.js
var require_task = __commonJS({
  "node_modules/core-js/internals/task.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var apply = require_function_apply();
    var bind = require_function_bind_context();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var fails = require_fails();
    var html = require_html();
    var arraySlice = require_array_slice();
    var createElement = require_document_create_element();
    var validateArgumentsLength = require_validate_arguments_length();
    var IS_IOS = require_environment_is_ios();
    var IS_NODE = require_environment_is_node();
    var set = globalThis.setImmediate;
    var clear = globalThis.clearImmediate;
    var process = globalThis.process;
    var Dispatch = globalThis.Dispatch;
    var Function = globalThis.Function;
    var MessageChannel = globalThis.MessageChannel;
    var String2 = globalThis.String;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = "onreadystatechange";
    var $location;
    var defer;
    var channel;
    var port;
    fails(function() {
      $location = globalThis.location;
    });
    var run = function(id) {
      if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var runner = function(id) {
      return function() {
        run(id);
      };
    };
    var eventListener = function(event) {
      run(event.data);
    };
    var globalPostMessageDefer = function(id) {
      globalThis.postMessage(String2(id), $location.protocol + "//" + $location.host);
    };
    if (!set || !clear) {
      set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
          apply(fn, void 0, args);
        };
        defer(counter);
        return counter;
      };
      clear = function clearImmediate(id) {
        delete queue[id];
      };
      if (IS_NODE) {
        defer = function(id) {
          process.nextTick(runner(id));
        };
      } else if (Dispatch && Dispatch.now) {
        defer = function(id) {
          Dispatch.now(runner(id));
        };
      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
      } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener("message", eventListener, false);
      } else if (ONREADYSTATECHANGE in createElement("script")) {
        defer = function(id) {
          html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(runner(id), 0);
        };
      }
    }
    module.exports = {
      set,
      clear
    };
  }
});

// node_modules/core-js/internals/safe-get-built-in.js
var require_safe_get_built_in = __commonJS({
  "node_modules/core-js/internals/safe-get-built-in.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var DESCRIPTORS = require_descriptors();
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    module.exports = function(name) {
      if (!DESCRIPTORS)
        return globalThis[name];
      var descriptor = getOwnPropertyDescriptor(globalThis, name);
      return descriptor && descriptor.value;
    };
  }
});

// node_modules/core-js/internals/queue.js
var require_queue = __commonJS({
  "node_modules/core-js/internals/queue.js"(exports, module) {
    "use strict";
    var Queue = function() {
      this.head = null;
      this.tail = null;
    };
    Queue.prototype = {
      add: function(item) {
        var entry = { item, next: null };
        var tail = this.tail;
        if (tail)
          tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
      },
      get: function() {
        var entry = this.head;
        if (entry) {
          var next = this.head = entry.next;
          if (next === null)
            this.tail = null;
          return entry.item;
        }
      }
    };
    module.exports = Queue;
  }
});

// node_modules/core-js/internals/environment-is-ios-pebble.js
var require_environment_is_ios_pebble = __commonJS({
  "node_modules/core-js/internals/environment-is-ios-pebble.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
  }
});

// node_modules/core-js/internals/environment-is-webos-webkit.js
var require_environment_is_webos_webkit = __commonJS({
  "node_modules/core-js/internals/environment-is-webos-webkit.js"(exports, module) {
    "use strict";
    var userAgent = require_environment_user_agent();
    module.exports = /web0s(?!.*chrome)/i.test(userAgent);
  }
});

// node_modules/core-js/internals/microtask.js
var require_microtask = __commonJS({
  "node_modules/core-js/internals/microtask.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var safeGetBuiltIn = require_safe_get_built_in();
    var bind = require_function_bind_context();
    var macrotask = require_task().set;
    var Queue = require_queue();
    var IS_IOS = require_environment_is_ios();
    var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
    var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
    var IS_NODE = require_environment_is_node();
    var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
    var document = globalThis.document;
    var process = globalThis.process;
    var Promise2 = globalThis.Promise;
    var microtask = safeGetBuiltIn("queueMicrotask");
    var notify;
    var toggle;
    var node;
    var promise;
    var then;
    if (!microtask) {
      queue = new Queue();
      flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain))
          parent.exit();
        while (fn = queue.get())
          try {
            fn();
          } catch (error) {
            if (queue.head)
              notify();
            throw error;
          }
        if (parent)
          parent.enter();
      };
      if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
        toggle = true;
        node = document.createTextNode("");
        new MutationObserver(flush).observe(node, { characterData: true });
        notify = function() {
          node.data = toggle = !toggle;
        };
      } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
        promise = Promise2.resolve(void 0);
        promise.constructor = Promise2;
        then = bind(promise.then, promise);
        notify = function() {
          then(flush);
        };
      } else if (IS_NODE) {
        notify = function() {
          process.nextTick(flush);
        };
      } else {
        macrotask = bind(macrotask, globalThis);
        notify = function() {
          macrotask(flush);
        };
      }
      microtask = function(fn) {
        if (!queue.head)
          notify();
        queue.add(fn);
      };
    }
    var queue;
    var flush;
    module.exports = microtask;
  }
});

// node_modules/core-js/internals/host-report-errors.js
var require_host_report_errors = __commonJS({
  "node_modules/core-js/internals/host-report-errors.js"(exports, module) {
    "use strict";
    module.exports = function(a, b) {
      try {
        arguments.length === 1 ? console.error(a) : console.error(a, b);
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js/internals/perform.js
var require_perform = __commonJS({
  "node_modules/core-js/internals/perform.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return { error: false, value: exec() };
      } catch (error) {
        return { error: true, value: error };
      }
    };
  }
});

// node_modules/core-js/internals/promise-native-constructor.js
var require_promise_native_constructor = __commonJS({
  "node_modules/core-js/internals/promise-native-constructor.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    module.exports = globalThis.Promise;
  }
});

// node_modules/core-js/internals/promise-constructor-detection.js
var require_promise_constructor_detection = __commonJS({
  "node_modules/core-js/internals/promise-constructor-detection.js"(exports, module) {
    "use strict";
    var globalThis = require_global_this();
    var NativePromiseConstructor = require_promise_native_constructor();
    var isCallable = require_is_callable();
    var isForced = require_is_forced();
    var inspectSource = require_inspect_source();
    var wellKnownSymbol = require_well_known_symbol();
    var ENVIRONMENT = require_environment();
    var IS_PURE = require_is_pure();
    var V8_VERSION = require_environment_v8_version();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var SPECIES = wellKnownSymbol("species");
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);
    var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
        return true;
      if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"]))
        return true;
      if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        var promise = new NativePromiseConstructor(function(resolve) {
          resolve(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
      }
      return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
    });
    module.exports = {
      CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
      REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
      SUBCLASSING
    };
  }
});

// node_modules/core-js/internals/new-promise-capability.js
var require_new_promise_capability = __commonJS({
  "node_modules/core-js/internals/new-promise-capability.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var $TypeError = TypeError;
    var PromiseCapability = function(C) {
      var resolve, reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== void 0 || reject !== void 0)
          throw new $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aCallable(resolve);
      this.reject = aCallable(reject);
    };
    module.exports.f = function(C) {
      return new PromiseCapability(C);
    };
  }
});

// node_modules/core-js/modules/es.promise.constructor.js
var require_es_promise_constructor = __commonJS({
  "node_modules/core-js/modules/es.promise.constructor.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var IS_NODE = require_environment_is_node();
    var globalThis = require_global_this();
    var call = require_function_call();
    var defineBuiltIn = require_define_built_in();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var setSpecies = require_set_species();
    var aCallable = require_a_callable();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var anInstance = require_an_instance();
    var speciesConstructor = require_species_constructor();
    var task = require_task().set;
    var microtask = require_microtask();
    var hostReportErrors = require_host_report_errors();
    var perform = require_perform();
    var Queue = require_queue();
    var InternalStateModule = require_internal_state();
    var NativePromiseConstructor = require_promise_native_constructor();
    var PromiseConstructorDetection = require_promise_constructor_detection();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var PROMISE = "Promise";
    var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
    var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
    var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
    var setInternalState = InternalStateModule.set;
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var PromiseConstructor = NativePromiseConstructor;
    var PromisePrototype = NativePromisePrototype;
    var TypeError2 = globalThis.TypeError;
    var document = globalThis.document;
    var process = globalThis.process;
    var newPromiseCapability = newPromiseCapabilityModule.f;
    var newGenericPromiseCapability = newPromiseCapability;
    var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
    var UNHANDLED_REJECTION = "unhandledrejection";
    var REJECTION_HANDLED = "rejectionhandled";
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var Internal;
    var OwnPromiseCapability;
    var PromiseWrapper;
    var nativeThen;
    var isThenable = function(it) {
      var then;
      return isObject(it) && isCallable(then = it.then) ? then : false;
    };
    var callReaction = function(reaction, state) {
      var value = state.value;
      var ok = state.state === FULFILLED;
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED)
              onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true)
            result = value;
          else {
            if (domain)
              domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(new TypeError2("Promise-chain cycle"));
          } else if (then = isThenable(result)) {
            call(then, result, resolve, reject);
          } else
            resolve(result);
        } else
          reject(value);
      } catch (error) {
        if (domain && !exited)
          domain.exit();
        reject(error);
      }
    };
    var notify = function(state, isReject) {
      if (state.notified)
        return;
      state.notified = true;
      microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while (reaction = reactions.get()) {
          callReaction(reaction, state);
        }
        state.notified = false;
        if (isReject && !state.rejection)
          onUnhandled(state);
      });
    };
    var dispatchEvent = function(name, promise, reason) {
      var event, handler;
      if (DISPATCH_EVENT) {
        event = document.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        globalThis.dispatchEvent(event);
      } else
        event = { promise, reason };
      if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis["on" + name]))
        handler(event);
      else if (name === UNHANDLED_REJECTION)
        hostReportErrors("Unhandled promise rejection", reason);
    };
    var onUnhandled = function(state) {
      call(task, globalThis, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
          result = perform(function() {
            if (IS_NODE) {
              process.emit("unhandledRejection", value, promise);
            } else
              dispatchEvent(UNHANDLED_REJECTION, promise, value);
          });
          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error)
            throw result.value;
        }
      });
    };
    var isUnhandled = function(state) {
      return state.rejection !== HANDLED && !state.parent;
    };
    var onHandleUnhandled = function(state) {
      call(task, globalThis, function() {
        var promise = state.facade;
        if (IS_NODE) {
          process.emit("rejectionHandled", promise);
        } else
          dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };
    var bind = function(fn, state, unwrap) {
      return function(value) {
        fn(state, value, unwrap);
      };
    };
    var internalReject = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify(state, true);
    };
    var internalResolve = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      try {
        if (state.facade === value)
          throw new TypeError2("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) {
          microtask(function() {
            var wrapper = { done: false };
            try {
              call(
                then,
                value,
                bind(internalResolve, wrapper, state),
                bind(internalReject, wrapper, state)
              );
            } catch (error) {
              internalReject(wrapper, error, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify(state, false);
        }
      } catch (error) {
        internalReject({ done: false }, error, state);
      }
    };
    if (FORCED_PROMISE_CONSTRUCTOR) {
      PromiseConstructor = function Promise2(executor) {
        anInstance(this, PromisePrototype);
        aCallable(executor);
        call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
          executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
          internalReject(state, error);
        }
      };
      PromisePrototype = PromiseConstructor.prototype;
      Internal = function Promise2(executor) {
        setInternalState(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: new Queue(),
          rejection: false,
          state: PENDING,
          value: null
        });
      };
      Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process.domain : void 0;
        if (state.state === PENDING)
          state.reactions.add(reaction);
        else
          microtask(function() {
            callReaction(reaction, state);
          });
        return reaction.promise;
      });
      OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };
      if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) {
          defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
              call(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
          }, { unsafe: true });
        }
        try {
          delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        if (setPrototypeOf) {
          setPrototypeOf(NativePromisePrototype, PromisePrototype);
        }
      }
    }
    $({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      Promise: PromiseConstructor
    });
    setToStringTag(PromiseConstructor, PROMISE, false, true);
    setSpecies(PROMISE);
  }
});

// node_modules/core-js/internals/promise-statics-incorrect-iteration.js
var require_promise_statics_incorrect_iteration = __commonJS({
  "node_modules/core-js/internals/promise-statics-incorrect-iteration.js"(exports, module) {
    "use strict";
    var NativePromiseConstructor = require_promise_native_constructor();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
      NativePromiseConstructor.all(iterable).then(void 0, function() {
      });
    });
  }
});

// node_modules/core-js/modules/es.promise.all.js
var require_es_promise_all = __commonJS({
  "node_modules/core-js/modules/es.promise.all.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call($promiseResolve, C, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.catch.js
var require_es_promise_catch = __commonJS({
  "node_modules/core-js/modules/es.promise.catch.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var NativePromiseConstructor = require_promise_native_constructor();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var defineBuiltIn = require_define_built_in();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    $({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
      "catch": function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    if (!IS_PURE && isCallable(NativePromiseConstructor)) {
      method = getBuiltIn("Promise").prototype["catch"];
      if (NativePromisePrototype["catch"] !== method) {
        defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: true });
      }
    }
    var method;
  }
});

// node_modules/core-js/modules/es.promise.race.js
var require_es_promise_race = __commonJS({
  "node_modules/core-js/modules/es.promise.race.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable(C.resolve);
          iterate(iterable, function(promise) {
            call($promiseResolve, C, promise).then(capability.resolve, reject);
          });
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.reject.js
var require_es_promise_reject = __commonJS({
  "node_modules/core-js/modules/es.promise.reject.js"() {
    "use strict";
    var $ = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    $({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        var capabilityReject = capability.reject;
        capabilityReject(r);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/internals/promise-resolve.js
var require_promise_resolve = __commonJS({
  "node_modules/core-js/internals/promise-resolve.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var isObject = require_is_object();
    var newPromiseCapability = require_new_promise_capability();
    module.exports = function(C, x) {
      anObject(C);
      if (isObject(x) && x.constructor === C)
        return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
  }
});

// node_modules/core-js/modules/es.promise.resolve.js
var require_es_promise_resolve = __commonJS({
  "node_modules/core-js/modules/es.promise.resolve.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var IS_PURE = require_is_pure();
    var NativePromiseConstructor = require_promise_native_constructor();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var promiseResolve = require_promise_resolve();
    var PromiseConstructorWrapper = getBuiltIn("Promise");
    var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
    $({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
      resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.js
var require_es_promise = __commonJS({
  "node_modules/core-js/modules/es.promise.js"() {
    "use strict";
    require_es_promise_constructor();
    require_es_promise_all();
    require_es_promise_catch();
    require_es_promise_race();
    require_es_promise_reject();
    require_es_promise_resolve();
  }
});

// node_modules/core-js/modules/es.promise.all-settled.js
var require_es_promise_all_settled = __commonJS({
  "node_modules/core-js/modules/es.promise.all-settled.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var promiseResolve = aCallable(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call(promiseResolve, C, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = { status: "fulfilled", value };
              --remaining || resolve(values);
            }, function(error) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = { status: "rejected", reason: error };
              --remaining || resolve(values);
            });
          });
          --remaining || resolve(values);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.any.js
var require_es_promise_any = __commonJS({
  "node_modules/core-js/modules/es.promise.any.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var getBuiltIn = require_get_built_in();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    var PROMISE_ANY_ERROR = "No one promise resolved";
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      any: function any(iterable) {
        var C = this;
        var AggregateError = getBuiltIn("AggregateError");
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var promiseResolve = aCallable(C.resolve);
          var errors = [];
          var counter = 0;
          var remaining = 1;
          var alreadyResolved = false;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyRejected = false;
            remaining++;
            call(promiseResolve, C, promise).then(function(value) {
              if (alreadyRejected || alreadyResolved)
                return;
              alreadyResolved = true;
              resolve(value);
            }, function(error) {
              if (alreadyRejected || alreadyResolved)
                return;
              alreadyRejected = true;
              errors[index] = error;
              --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
            });
          });
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.with-resolvers.js
var require_es_promise_with_resolvers = __commonJS({
  "node_modules/core-js/modules/es.promise.with-resolvers.js"() {
    "use strict";
    var $ = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    $({ target: "Promise", stat: true }, {
      withResolvers: function withResolvers() {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        return {
          promise: promiseCapability.promise,
          resolve: promiseCapability.resolve,
          reject: promiseCapability.reject
        };
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.finally.js
var require_es_promise_finally = __commonJS({
  "node_modules/core-js/modules/es.promise.finally.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var NativePromiseConstructor = require_promise_native_constructor();
    var fails = require_fails();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var speciesConstructor = require_species_constructor();
    var promiseResolve = require_promise_resolve();
    var defineBuiltIn = require_define_built_in();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var NON_GENERIC = !!NativePromiseConstructor && fails(function() {
      NativePromisePrototype["finally"].call({ then: function() {
      } }, function() {
      });
    });
    $({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
      "finally": function(onFinally) {
        var C = speciesConstructor(this, getBuiltIn("Promise"));
        var isFunction = isCallable(onFinally);
        return this.then(
          isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          } : onFinally,
          isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
              throw e;
            });
          } : onFinally
        );
      }
    });
    if (!IS_PURE && isCallable(NativePromiseConstructor)) {
      method = getBuiltIn("Promise").prototype["finally"];
      if (NativePromisePrototype["finally"] !== method) {
        defineBuiltIn(NativePromisePrototype, "finally", method, { unsafe: true });
      }
    }
    var method;
  }
});

// node_modules/core-js/es/promise/index.js
var require_promise = __commonJS({
  "node_modules/core-js/es/promise/index.js"(exports, module) {
    require_es_aggregate_error();
    require_es_array_iterator();
    require_es_object_to_string();
    require_es_promise();
    require_es_promise_all_settled();
    require_es_promise_any();
    require_es_promise_with_resolvers();
    require_es_promise_finally();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Promise;
  }
});
export default require_promise();
//# sourceMappingURL=core-js_es_promise.js.map
