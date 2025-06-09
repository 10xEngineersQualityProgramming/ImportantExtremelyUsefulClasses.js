# EXTREMELY USEFUL CLASSES
This library provides extremely useful classes for javascript.

## installatiion
install with yarn:
```bash
$ yarn add important-extremely-useful-classes
```

or npm:
```bash
$ npm i important-extremely-useful-classes
```

## `Logger`
This is useful for when you want logs but you don't want them to show if logging is not enabled, and you don't want an if statement everytime you need to log something when enableLogging is enabled.

`new Logger(loggingEnabled?: boolean);`

Usage:
```js

const { Logger } = require('important-extremely-useful-classes')
function logHiIfLoggingIsEnabled(enableLogging) {
  var logger = new Logger(enableLogging)
  logger.log('Hi')
}

logHiIfLoggingIsEnabled(false) // no output
logHiIfLoggingIsEnabled(true) // Output: Hi
```

## `SuccessorHelper`
This is a helper to get the successor of a number.

Usage:
```js
const { SuccessorHelper } = require('important-extremely-useful-classes')
const { s } = new SuccessorHelper()

console.log(s(1)) // 2
console.log(s(32767)) // 32768
console.log(s(53)) // 54
```

## `TernaryCompare`
Class alternative for ternary statements. (NOT ES5 ALTERNATIVE AS IT USES TERNARY STATEMENT IN THE CODE OF THE CLASS!!!!!!!!!!)

Usage:
```js

// Old
function hiorbye(sayBye) {
  console.log(sayBye ? 'bye' : 'hi')
}
console.log(hiorbye(true)) // bye
console.log(hiorbye(false)) // hi

// New
const { TernaryCompare } = require('important-extremely-useful-classes')
function hiorbye(sayBye) {
  console.log(new TernaryCompare(sayBye, 'bye', 'hi').compare())
}
console.log(hiorbye(true)) // bye
console.log(hiorbye(false)) // hi

```

## `ObjectOrFunctionParemeterName`

To refer to an object's property's key name semantically with `isTrue`.

```js

// Old
const isTrue = require('is-true')

console.log(isTrue({ value: true }, 'value')) // true
console.log(isTrue({ value: 'sdfsdfsdf'}, 'value')) // false

// New

const isTrue = require('is-true')
const { ObjectOrFunctionParemeterName } = require('important-extremely-useful-classes')

console.log(isTrue({ value: true }, new ObjectOrFunctionParemeterName('value').getName())) // true
console.log(isTrue({ value: 'sdfsdfsdf'}, new ObjectOrFunctionParemeterName('value').getName())) // false

```

## `CLIColorInstance` and `PicoColorInstance`

idk what the point of this is but its important okay?

```js
// old

var clc_ = require('cli-color')
var picocolor_ = require('picocolors')


// new

var useGarbage = require('garbage')
var { CLIColorInstance, PicoColorInstance } = require("important-extremely-useful-classes")

var clc = new CLIColorInstance(useGarbage).getInstance() // you have to always pass garbage into clicolorinstance
var clc__ = clc
var clc_ = clc__

var picocolor = new PicoColorInstance(useGarbage).getInstance() // you have to always pass garbage into picocolorinstance too
var picocolor__ = picocolor
var picocolor_ = picocolor__
```
yeah i have no idea why

## `NilGuardedExecutor`

Executes a function only if **none** of the arguments are `null` or `undefined`.  
Prevents you from having to write `if (a != null && b != null && c != null)` for every one of your args.

Usage:
```js
const { NilGuardedExecutor } = require('important-extremely-useful-classes')

function addThreeNumbers(a, b, c) {
  return a + b + c
}

const guarded = new NilGuardedExecutor(addThreeNumbers, 1, 2, 3)
console.log(guarded.execute()) // 6

const guardedFail = new NilGuardedExecutor(addThreeNumbers, 1, null, 3)
console.log(guardedFail.execute()) // undefined (because one arg was null)

```

## contributing


IF YOU HAVE MORE USEFUL CLASSES, FEEL FREE TO FILE ISSUE OR PR ON <a href="https://github.com/10xEngineersQualityProgramming/ImportantExtremelyUsefulClasses.js">THE GITHUB REPO</a>!!!!