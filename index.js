

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
  Server,
  logStreams
 } = require("./js/server"),
    { 
  Client
 } = require("./js/client");


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
        /* node_modules/kit/inc/macros.sibilant:162:9 */
      
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
    { 
  inspect
 } = require("util");


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
        /* node_modules/kit/inc/macros.sibilant:162:9 */
      
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
var events = require("events");
var EventEmitter = Interface.define("EventEmitter", { 
  init(  ){ 
    
      
      events.EventEmitter.call(this);
      return this;
    
   },
  doc:("a simple wrapper around the " + "event" + " modules  type" + "EventEmitter"),
  extend:events.EventEmitter.prototype
 });
exports.EventEmitter = EventEmitter;
sibilant.include("kit/header");
var logFile = fs.createWriteStream("./log");
var logStreams = (new Set([ logFile ]));
var stdout = process.stdout;
exports.logStreams = logStreams;
var runIn = R.curry(((context, string) => {
	
  return vm.runInContext(string, context);

}));
var writeLine = R.curry(((data, socket) => {
	
  return (new Promise(((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return socket.write((data.toString() + "\n"), (() => {
    	
      return success(data);
    
    }));
  
  })));

}));
var writeJs = R.curry(((js, socket) => {
	
  return (new Promise(((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return socket.write(("```js\n" + js + "\n```\n"), (() => {
    	
      return success(js);
    
    }));
  
  })));

}));
var { 
  __:_
 } = R;
var bindEval = R.curry(((context, socket, data) => {
	
  return (new Promise(((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return (function() {
      try {
        return success(sibilant(data.toString()).js);
      } catch (e) {
        return fail(e);
      }
    }).call(this);
  
  }))).then(writeJs(_, socket)).then(runIn(context)).then(inspect).catch(inspect).then(writeLine(_, socket));

}));
var createServer = (function createServer$(_context) {
  /* create-server src/server.sibilant:53:0 */

  return net.createServer(bindSocket(createContext(_context)));
});
var bindSocket = R.curry(((context, socket) => {
	
  "Binds a socket to a context, causing all data from the socket to be parsed to\n"+"js from sibilant and evaluated in the context given";
  socket.on("data", bindEval(context, socket)).on("close", (() => {
  	
    return logStreams.delete(socket);
  
  }));
  return logStreams.add(socket);

}));
var createContext = (function createContext$(_context) {
  /* create-context src/server.sibilant:64:0 */

  return vm.createContext(mixin([ _context, { 
    sibilant
   } ]));
});
var Server = Interface.define("Server", { 
  init( _context = global,tcpServer = createServer(_context) ){ 
    
      this._context = _context;this.tcpServer = tcpServer;
      return this;
    
   },
  sibilant:sibilant,
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
         }, (() => {
        	
          return this.emit("open");
        
        }));
        return this;
      }).call(this);
    
   },
  close( tcpServer = this.tcpServer ){ 
    
      return (function() {
        /* macros.sibilant:2:27 */
      
        tcpServer.close((() => {
        	
          return this.emit("close");
        
        }));
        return this;
      }).call(this);
    
   }
 });
exports.Server = Server;


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
        /* node_modules/kit/inc/macros.sibilant:162:9 */
      
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
var readline = require("readline"),
    net = require("net");
var seconds = (function seconds$(n) {
  /* seconds src/client.sibilant:13:0 */

  return (n * 1000);
});
var logReply = ((d) => {
	
  return console.log(d.toString());

}),
    logError = ((e) => {
	
  return console.error(e.message);

});
var Client = Interface.define("Client", { 
  init( port = this.port,host = this.host,input = this.input,output = this.output,retryInterval = seconds(5),rl = readline.createInterface({ 
    input,
    output,
    prompt:"#>"
   }) ){ 
    
      this.port = port;this.host = host;this.input = input;this.output = output;this.retryInterval = retryInterval;this.rl = rl;
      return this;
    
   },
  spawn( { 
    port,
    host,
    retryInterval,
    input,
    output
   } ){ 
    
      return create(Client)(port, host, input, output, retryInterval);
    
   },
  _reconnect( retryInterval = this.retryInterval ){ 
    
      return setTimeout((() => {
      	
        return this.connect();
      
      }), retryInterval);
    
   },
  write( d ){ 
    
      return (new Promise(((success, fail) => {
      	
        var resolve = success,
            reject = fail;
        return this._socket.once("error", fail).write(d, (() => {
        	
          this._socket.removeListener("error", fail);
          return success();
        
        }));
      
      })));
    
   },
  connect( port = this.port,rl = this.rl ){ 
    
      return (function() {
        /* macros.sibilant:2:27 */
      
        rl.on("line", (($fpipe) => {
        	
          return this.write($fpipe);
        
        }));
        this._socket = net.connect(port).on("data", logReply).on("connect", (() => {
        	
          return console.log("connected");
        
        })).on("close", (() => {
        	
          console.log("connection closed,attempting to reconnect");
          return this._reconnect();
        
        })).on("error", logError);
        return this;
      }).call(this);
    
   }
 });
exports.Client = Client;
exports.Server = Server;
exports.Client = Client;
exports.logStreams = logStreams;