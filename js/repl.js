

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
var curry = R.curry;


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
var events = require("events");
var emit = R.curry(((event, emitter, data) => {
	
  return emitter.emit(event, data);

}));
var bubble = (function bubble$(src, target, event) {
  /* bubble src/event-emitter.sibilant:7:0 */

  return src.on(event, emit(event, target));
});
var EventEmitter = Interface.define("EventEmitter", { 
  init(  ){ 
    
      
      events.EventEmitter.call(this);
      return this;
    
   },
  doc:("a simple wrapper around the " + "event" + " modules  type" + "EventEmitter"),
  extend:events.EventEmitter.prototype
 });
exports.EventEmitter = EventEmitter;
var resolve = (function resolve$(v) {
  /* resolve src/actor.sibilant:13:0 */

  return Promise.resolve(v);
});
var sendTo = R.curry(((actor, msg) => {
	
  return actor.send(msg);

}));
var Actor = EventEmitter.define("Actor", { 
  init( promise = resolve() ){ 
    
      this.promise = promise;
      EventEmitter.init.call(this);
      this.on("error", ((e) => {
      	
        return this.promise = resolve();
      
      }));
      return this;
    
   },
  send( msg ){ 
    
      return this.promise = this.promise.then(((nil) => {
      	
        return this.emit("message", msg);
      
      })).catch(((e) => {
      	
        this.emit("error", e);
        throw e
      
      }));
    
   }
 });
exports.Actor = Actor;
var Compiler = Actor.define("Compiler", { 
  init(  ){ 
    
      
      Actor.init.call(this);
      return this;
    
   },
  spawn(  ){ 
    
      return create(this)();
    
   }
 });
Compiler.send = (function Compiler$send$(data = this.data) {
  /* Compiler.send node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return this.promise = this.promise.then(((nil) => {
  	
    return resolve(data).then((function() {
      /* src/repl/compiler.sibilant:18:15 */
    
      return sibilant(arguments[0].toString()).js;
    })).then(emit("message", this)).catch(emit("error", this));
  
  })).catch(((e) => {
  	
    this.emit("error", e);
    throw e
  
  }));
});
exports.Compiler = Compiler;var scanning__QUERY = (function scanning__QUERY$(parser) {
  /* scanning? src/repl/reader.sibilant:4:0 */

  return !((parser.inQuote || parser.comment));
});
var readers = { 
  "\"":(function(c) {
    /* src/repl/reader.sibilant:8:12 */
  
    this.inQuote = !(this.inQuote);
    return c;
  }),
  ";":(function(c) {
    /* src/repl/reader.sibilant:9:11 */
  
    this.comment = true;
    return "";
  })
 };
readers["("] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.parens)++);
      return char;
    }
  }).call(this);
});
readers[")"] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.parens)--);
      return char;
    }
  }).call(this);
});
readers["["] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.squareBraces)++);
      return char;
    }
  }).call(this);
});
readers["]"] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.squareBraces)--);
      return char;
    }
  }).call(this);
});
readers["{"] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.curlyBraces)++);
      return char;
    }
  }).call(this);
});
readers["}"] = (function(char) {
  /* src/repl/reader.sibilant:13:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.curlyBraces)--);
      return char;
    }
  }).call(this);
});
var Reader = Actor.define("Reader", { 
  init( fragment = [],parens = 0,squareBraces = 0,curlyBraces = 0,inQuote__QUERY = false ){ 
    
      this.fragment = fragment;this.parens = parens;this.squareBraces = squareBraces;this.curlyBraces = curlyBraces;this.inQuote__QUERY = inQuote__QUERY;
      Actor.init.call(this);
      return this;
    
   },
  parsers:(new Map()),
  spawn( compiler ){ 
    
      return (function() {
        if (this.parsers.has(compiler)) {
          return this.parsers.get(compiler);
        } else {
          return (function(value) {
            /* node_modules/kit/inc/macros.sibilant:162:9 */
          
            this.parsers.set(compiler, value);
            return value;
          })((function() {
            /* node_modules/kit/inc/macros.sibilant:13:25 */
          
            return create(Parser)().start();
          }).call(this));
        }
      }).call(this);
    
   },
  send( string = this.string,fragment = this.fragment ){ 
    
      var lines = string.split("\n");
      return lines.each(((l) => {
      	
        return this.handleLine(l);
      
      }));
    
   }
 });
Reader.handleLine = (function Reader$handleLine$(line = this.line) {
  /* Reader.handle-line node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return this.promise = this.promise.then(((nil) => {
  	
    var looping = true,
        i = 0;
    var chars = line.split("");
    this.comment = false;
    (function() {
      var while$1 = undefined;
      while ((looping && !(this.comment))) {
        while$1 = (function() {
          var char = chars[((i)++)];
          (function() {
            if (readers[char]) {
              return char = readers[char].call(this, char, chars, i);
            }
          }).call(this);
          return (function() {
            if (looping) {
              this.fragment.push(char);
              (function() {
                if ((!(this.parens) && !(this.curlyBraces) && !(this.squareBraces))) {
                  var s = this.fragment.join("").trim();
                  (function() {
                    if (!(s.length === 0)) {
                      return this.emit("message", s);
                    }
                  }).call(this);
                  return this.fragment = [];
                }
              }).call(this);
              return (function() {
                if (i >= chars.length) {
                  return looping = false;
                }
              }).call(this);
            }
          }).call(this);
        }).call(this);
      };
      return while$1;
    }).call(this);
    return this.fragment.push("\n");
  
  })).catch(((e) => {
  	
    this.emit("error", e);
    throw e
  
  }));
});
exports.Reader = Reader;

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
var runIn = R.curry(((context, string) => {
	
  return vm.runInContext(string, context);

}));
var { 
  inspect
 } = require("util"),
    vm = require("vm");
var Console = Interface.define("Console", { 
  init( evaluator = this.evaluator ){ 
    
      this.evaluator = evaluator;
      return this;
    
   },
  extend:console,
  log( dots = params ){ 
    
      return this.evaluator.emit("message", [ "log", params.map(inspect).join(" ") ]);
    
   }
 });
Object.copy = (function Object$copy$(o) {
  /* Object.copy src/repl/evaluator.sibilant:22:0 */

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
    
   }
 });
Evaluator.send = (function Evaluator$send$(js = this.js, context = this.context) {
  /* Evaluator.send node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return this.promise = this.promise.then(((nil) => {
  	
    return resolve(js).then(runIn(context)).then(((result) => {
    	
      return this.emit("message", [ "result", result ]);
    
    })).catch(((err) => {
    	
      return this.emit("message", [ "error", err ]);
    
    }));
  
  })).catch(((e) => {
  	
    this.emit("error", e);
    throw e
  
  }));
});
exports.Evaluator = Evaluator;var curry = R.curry;
var assignHandlers = (function assignHandlers$(layer) {
  /* assign-handlers src/layer.sibilant:7:0 */

  
});
var Layer = Actor.define("Layer", { 
  init( types = this.types,members = types.map(((t) => {
  	
    return create(t)();
  
  })) ){ 
    
      this.types = types;this.members = members;
      types.each(((t, i) => {
      	
        return this[t.symbol] = members[i];
      
      }));
      Actor.init.call(this);
      return this;
    
   },
  get assignHandlers(  ){ 
    
      return ((a, i) => {
      	
        var members = this.members;
        return bubble(a.on("message", R.pipe(sendTo(this.members[(i + 1)]))), this, "error");
      
      });
    
   },
  start( members = this.members ){ 
    
      return (function() {
        /* src/meta.sibilant:5:27 */
      
        var last = members.slice(-1)[0],
            inner = members.slice(0, -1);
        inner.forEach(this.assignHandlers);
        bubble(last, this, "message");
        return this;
      }).call(this);
    
   },
  of( types ){ 
    
      return extend(this, { 
        types
       });
    
   }
 });
Layer.send = (function Layer$send$(d = this.d, members = this.members) {
  /* Layer.send node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return this.promise = this.promise.then(((nil) => {
  	
    return members[0].send(d);
  
  })).catch(((e) => {
  	
    this.emit("error", e);
    throw e
  
  }));
});
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