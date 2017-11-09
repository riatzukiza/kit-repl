

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
  Actor
 } = require("kit-actor");
var { 
  EventEmitter
 } = require("kit-events");
defCurried(runIn, context(string), vm.runInContext(string, context));
var lit(inspect) = require("util"),
    vm = require("vm");
define(Console, Interface, init(evaluator()), extend(console), defGeneric(log, params(), this.evaluator.emit("message", [ "log", params.map(inspect).join(" ") ])));
Object.copy = (function Object$copy$(o) {
  /* Object.copy src/evaluator.sibilant:31:0 */

  return mixin(o, {  });
});
define(Evaluator, Actor, init(context(vm.createContext(Object.copy(global)))(), Actor.init.call(this)), defGeneric(spawn, null, create(this)()), defGeneric(_send, js(context), resolve(js).then(runIn(context)).then(=>(result(), this.emit("message", [ "result", result ]))).catch(=>(err(), this.emit("message", [ "error", err ])))));
exports.Evaluator = Evaluator;