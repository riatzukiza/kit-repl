

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
var curry = R.curry;
var assignHandlers = (function assignHandlers$(layer) {
  /* assign-handlers src/layer.sibilant:15:0 */

  
});
define(Layer, Actor, init(types(members(types.map(=>(t(), create(t)())))), t(i).forEach((function(types) {
  /* src/layer.sibilant:20:8 */

  return this[t.symbol] = members[i];
})), Actor.init.call(this)), gett(assignHandlers, =>(a(i), var members = this.members;, bubble(a.on("message", R.pipe(sendTo(this.members[(i + 1)]))), this, "error"))), defGeneric(_send, d(members), members[0].send(d)), defGeneric(start, members(), fluently(var last = members.slice(-1)[0],
    inner = members.slice(0, -1);, inner.forEach(this.assignHandlers), bubble(last, this, "message"))), var of = (function of$(types) {
  /* of src/layer.sibilant:45:2 */

  return extend(this, lit(types));
}););