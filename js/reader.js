

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
var scanning__QUERY = (function scanning__QUERY$(parser) {
  /* scanning? src/reader.sibilant:13:0 */

  return !((parser.inQuote || parser.comment));
});
var readers = lit(("\"" + (function(c) {
  /* src/reader.sibilant:17:12 */

  this.inQuote = !(this.inQuote);
  return c;
})), (";" + (function(c) {
  /* src/reader.sibilant:18:11 */

  return (function() {
    if (this.inQuote) {
      return c;
    } else {
      this.comment = true;
      return "";
    }
  }).call(this);
})));
readers["("] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.parens)++);
      return char;
    }
  }).call(this);
});
readers[")"] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.parens)--);
      return char;
    }
  }).call(this);
});
readers["["] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.squareBraces)++);
      return char;
    }
  }).call(this);
});
readers["]"] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.squareBraces)--);
      return char;
    }
  }).call(this);
});
readers["{"] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.curlyBraces)++);
      return char;
    }
  }).call(this);
});
readers["}"] = (function(char) {
  /* src/reader.sibilant:24:13 */

  return (function() {
    if (scanning__QUERY(this)) {
      ((this.curlyBraces)--);
      return char;
    }
  }).call(this);
});
define(Reader, Actor, init(fragment([])((0), squareBraces(0), curlyBraces(0), inQuote__QUERY(false)), Actor.init.call(this)), parsers((new Map())), var spawn = (function spawn$(compiler) {
  /* spawn src/reader.sibilant:51:2 */

  return remember(this.parsers, compiler, create(Parser)().start());
});, defGeneric(_send, string(fragment), var lines = string.split("\n");, line().forEach((function(lines) {
  /* src/reader.sibilant:59:4 */

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
}))));
exports.Reader = Reader;