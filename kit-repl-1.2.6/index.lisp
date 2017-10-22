(namespace repl)

(include "kit/header")
(import-namespace kit)

(require! (lit Server log-streams) "./js/server"
          (lit Client) "./js/client")
(export Server)
(export Client)
(export log-streams)
