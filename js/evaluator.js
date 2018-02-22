

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
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
var id = 0;
var runIn = R.curry(((context, string) => {
	
  return vm.runInContext(string, context, { 
    filename:("kit" + ((id)++))
   });

}));
var { 
  inspect
 } = require("util"),
    vm = require("vm");
Object.copy = (function Object$copy$(o) {
  /* Object.copy src/evaluator.sibilant:33:0 */

  return mixin(o, {  });
});
var Evaluator = Actor.define("Evaluator", { 
  init( scope = Object.copy(global),context = vm.createContext(scope) ){ 
    
      this.scope = scope;this.context = context;
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