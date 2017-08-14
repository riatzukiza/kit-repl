

(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? ../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

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
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;


(function(a, b, c) {
  /* ../../../../node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry((f, a) => {
	
  return a.map(f);

});
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? ../../../../node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow ../../../../node_modules/kit/inc/core/fp.sibilant:14:0 */

  return () => {
  	
    return (new errType(message));
  
  };
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of ../../../../node_modules/kit/inc/core/fp.sibilant:17:0 */

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
var Interface = {  };
mixin({ 
  _symbols:{  },
  _types:{  },
  init( name = this.name,_obj = this._obj,_types = {  },_symbols = {  } ){ 
    
      this.name = name;this._obj = _obj;this._types = _types;this._symbols = _symbols;
      return this;
    
   },
  define( name = this.name,_obj = this._obj,_types = this._types,_symbols = this._symbols,_shares = (_obj.borrows || _obj.shares || []),_ext = (_obj.extend || {  }),_build = _obj.build ){ 
    
      return (function() {
        if (name in _symbols) {
          return mixin(_obj, _types[_symbols[name]]);
        } else {
          return this.create(name, _obj);
        }
      }).call(this);
    
   },
  create( name = this.name,_obj = this._obj,_types = this._types,_symbols = this._symbols,_shares = (_obj.borrows || _obj.shares || []),_ext = (_obj.extend || {  }),_build = _obj.build,_symbol = Symbol(name) ){ 
    
      return (function(m) {
        /* ../../../../node_modules/kit/inc/macros.sibilant:162:9 */
      
        _symbols[name] = _symbol;
        _types[_symbol] = m;
        (function() {
          if (_build) {
            return m.build();
          }
        }).call(this);
        return m;
      })(extend(_ext, mixin([ { 
        name,
        symbol:_symbol
       }, ..._shares ], _obj)));
    
   }
 }, Interface);
var child_process = require("child_process"),
    repl = require("repl"),
    fs = require("fs"),
    sibilant = require("sibilant"),
    net = require("net"),
    vm = require("vm"),
    util = require("util"),
    { 
  EventEmitter
 } = require("./event-emitter");
sibilant.include("kit/header");
var logFile = fs.createWriteStream("./log");
var logStreams = (new Set([ logFile ]));
var stdout = process.stdout;
exports.logStreams = logStreams;
var runIn = (function runIn$(context, string) {
  /* run-in src/server.sibilant:28:0 */

  return vm.runInContext(string, context);
});
var writeLine = R.curry((data, socket) => {
	
  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return socket.write((data.toString() + "\n"), success);
  
  }));

});
var { 
  _
 } = R;
var bindEval = R.curry((context, socket, data) => {
	
  return (new Promise((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return (function() {
      try {
        return success(sibilant(data.toString()).js);
      } catch (e) {
        return fail(e);
      }
    }).call(this);
  
  })).then(writeLine(_, socket)).then(runIn(context)).then(inspect).catch(inspect).then(writeLine(_, socket));

});
var createServer = (function createServer$(_context) {
  /* create-server src/server.sibilant:47:0 */

  return net.createServer(bindSocket(createContext(_context)));
});
var bindSocket = R.curry((context, socket) => {
	
  "Binds a socket to a context, causing all data from the socket to be parsed to\n"+"js from sibilant and evaluated in the context given";
  socket.on("data", bindEval(context, socket)).on("close", () => {
  	
    return logStreams.delete(socket);
  
  });
  return logStreams.add(socket);

});
var createContext = (function createContext$(_context) {
  /* create-context src/server.sibilant:58:0 */

  return vm.createContext(mixin([ _context, { 
    sibilant
   } ]));
});
var Server = Interface.define("Server", { 
  init( _context = global,tcpServer = createServer(_context) ){ 
    
      this._context = _context;this.tcpServer = tcpServer;
      return this;
    
   },
  extend:EventEmitter,
  spawn(  ){ 
    
      return Object.create(this);
    
   },
  bind( context ){ 
    
      return this.init(context);
    
   },
  despawn(  ){ 
    
   },
  open( port = this.port,onOpen = this.onOpen,tcpServer = this.tcpServer ){ 
    
      return (function() {
        /* macros.sibilant:2:27 */
      
        (function() {
          if (typeof onOpen === "function") {
            return this.on("open", onOpen);
          }
        }).call(this);
        tcpServer.listen({ 
          port
         }, () => {
        	
          return this.emit("open");
        
        });
        return this;
      }).call(this);
    
   },
  close( tcpServer = this.tcpServer ){ 
    
      return (function() {
        /* macros.sibilant:2:27 */
      
        tcpServer.close(() => {
        	
          return this.emit("close");
        
        });
        return this;
      }).call(this);
    
   }
 });
exports.Server = Server;