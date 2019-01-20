var R = require("ramda");
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("@kit-js/core/js/util");
var curry = R.curry;
var { 
  Interface
 } = require("@kit-js/interface");
var { 
  Compiler
 } = require("./compiler"),
    { 
  Reader
 } = require("./reader"),
    { 
  Evaluator
 } = require("./evaluator"),
    { 
  Layer
 } = require("./layer");
var REPL = Layer.of([ Reader, Compiler, Evaluator ]).define("REPL", { 
  init(  ){ 
    
      
      Layer.init.call(this);
      this.on("message", (([ type, value ]) => {
      	
        return this.emit(type, value);
      
      }));
      return this;
    
   }
 });
exports.REPL = REPL;
exports.Compiler = Compiler;
exports.Reader = Reader;
exports.Evaluator = Evaluator;
exports.Layer = Layer;