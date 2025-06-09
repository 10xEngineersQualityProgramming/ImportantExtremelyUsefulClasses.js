var {NilGuardedExecutor} = require('./index')

const guarded = new NilGuardedExecutor(console.log, "Hello", "World")
guarded.execute()() // Logs "Hello World"

const guardedFail = new NilGuardedExecutor(console.log, "Hello", null)
guardedFail.execute()() // Does nothing
