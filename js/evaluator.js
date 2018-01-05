

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");


(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
var { 
  Interface
 } = require("kit-interface");
var { 
  Actor,
  sendTo
 } = require("kit-actor");
var { 
  EventEmitter,
  emit,
  bubble
 } = require("kit-events");
var runIn = R.curry(((context, string) => {
	
  return vm.runInContext(string, context, { 
    filename:"kit",
    displayErrors:true
   });

}));
var { 
  inspect
 } = require("util"),
    vm = require("vm");
Object.copy = (function Object$copy$(o) {
  /* Object.copy src/evaluator.sibilant:32:0 */

  return mixin(o, {  });
});
var Evaluator = Actor.define("Evaluator", { 
  init( context = vm.createContext(Object.copy(global)) ){ 
    
      this.context = context;
      Actor.init.call(this);
      return this;
    
   },
  spawn(  ){ 
    
      return create(this)();
    
   },
  _send( js = this.js,context = this.context ){ 
    
      return Promise.resolve(js).then(runIn(context)).then(((result) => {
      	
        return this.emit("message", [ "result", result ]);
      
      })).catch(((err) => {
      	
        return this.emit("message", [ "error", err ]);
      
      }));
    
   }
 });
exports.Evaluator = Evaluator;