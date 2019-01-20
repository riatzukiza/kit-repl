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
var sibilant = require("sibilant");
var Compiler = Actor.define("Compiler", { 
  init(  ){ 
    
      
      Actor.init.call(this);
      return this;
    
   },
  _send( data = this.data ){ 
    
      return Promise.resolve(data).then((function() {
        /* src/compiler.sibilant:23:17 */
      
        return sibilant(arguments[0].toString()).js;
      })).then(R.tap(emit("message", this))).catch(((e) => {
      	
        this.emit("error", e);
        throw e
      
      }));
    
   },
  spawn(  ){ 
    
      return create(this)();
    
   }
 });
exports.Compiler = Compiler;