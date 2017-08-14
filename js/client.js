

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
var readline = require("readline"),
    net = require("net");
var seconds = (function seconds$(n) {
  /* seconds src/client.sibilant:13:0 */

  return (n * 1000);
});
var logReply = (d) => {
	
  return console.log(d.toString());

},
    logError = (e) => {
	
  return console.error(e.message);

};
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
    
      return setTimeout(() => {
      	
        return this.connect();
      
      }, retryInterval);
    
   },
  connect( port = this.port,rl = this.rl ){ 
    
      return (function() {
        /* macros.sibilant:2:27 */
      
        rl.on("line", ($fpipe) => {
        	
          return this._socket.write($fpipe);
        
        });
        this._socket = net.connect(port).on("data", logReply).on("connect", () => {
        	
          return console.log("connected");
        
        }).on("close", () => {
        	
          console.log("connection closed,attempting to reconnect");
          return this._reconnect();
        
        }).on("error", logError);
        return this;
      }).call(this);
    
   }
 });
exports.Client = Client;