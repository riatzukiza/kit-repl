var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("@kit-js/core/js/util");
var { 
  Interface
 } = require("@kit-js/interface");
var { 
  Actor
 } = require("@kit-js/async/lib/actor"),
    { 
  EventEmitter
 } = require("@kit-js/async/lib/event-emitter");
var { 
  inspect
 } = require("util"),
    vm = require("vm");
var id = 0;
var runIn = R.curry(((string) => {
	
  return vm.runInThisContext(string, { 
    filename:("kit" + ((id)++))
   });

}));
var Evaluator = Actor.define("Evaluator", { 
  init(  ){ 
    
      
      Actor.init.call(this);
      return this;
    
   },
  spawn(  ){ 
    
      return create(this)();
    
   },
  _send( js = this.js,context = this.context ){ 
    
      return Promise.resolve(js).then(runIn).then(((result) => {
      	
        return this.emit("message", [ "result", result ]);
      
      }), result).catch(((err) => {
      	
        this.emit("message", [ "error", err ]);
        throw err
      
      }));
    
   }
 });
exports.Evaluator = Evaluator;