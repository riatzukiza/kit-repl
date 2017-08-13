mixin({ 
  it:"should attempt to reconnect when the connection to the server is cut.",
  it:"should be able to connect to a server running in the same node instance.",
  it:"should fail gracefully",
  it:"should signal when it connects successfully by emitting a 'connect' event.",
  it:"should signal when it fails to connect with an error."
 }, REPL.Client);
test(REPL.Server, it("should fail gracefully"), it("should signal once it opens"), it("should signal once it closes"));