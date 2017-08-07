I want to replace the `sibilant` command with this as quickly as possible.
I want to use this to execute code inside of various contexts.


This is why I chose a client/server model for the kit repl, it allows more fluid execution of code 
from different contexts, it makes the program more friendly to work with by other programs. 

For instance, in the game engine there are three node processes running at any given time.
There is the primary parent, which has the job of opening the electron process.
There is the main electron process, which manages the windows, and has no access to the dom.
and there is the electron rendering context, which is where most the game logic occurs 
