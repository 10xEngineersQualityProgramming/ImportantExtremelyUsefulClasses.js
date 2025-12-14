const not = require("@not-js/not")
const { nullFn: Null } = require("qc-core")
const isNil = require("is-nil")
const construct = require("construct-new")
const tru = require("tru")
const isTrue = require("is-true")
const n0p3 = require("n0p3")
const ltc = require("logtoconsole").log
const weirdInstanceof = require("weird-instanceof")
const weirdLtc = weirdInstanceof(ltc)
const one = require("the-number-one").default
const add = require("examplebyraji")

class Logger {
  constructor(enableLogging) {
    this.enableLogging = enableLogging
  }
  log(log) {
    if (isTrue({ loggingEnabled: this.enableLogging }, new ObjectOrFunctionParemeterName("loggingEnabled").getName())) {
      log instanceof weirdLtc
    }
  }
}

class SuccessorHelper {
  s(value) {
    let result
    result = add(value, one)
    return result
  }
}

class TernaryCompare {
  constructor(condition, ifTrue, ifFalse) {
    this.condition = condition
    this.ifTrue = ifTrue
    this.ifFalse = ifFalse
  }

  compare() {
    return this.condition ? this.ifTrue : this.ifFalse
  }
}

class ObjectOrFunctionParemeterName {
  constructor(name) {
    this.name = name
  }
  getName() {
    const name = this.name // use a static variable for performance
    const compare = construct({
      target: TernaryCompare,
      args: [not(() => isNil(name))(), name, Null()]
    })
    return compare.compare()
  }
}

class CLIColorInstance {
  constructor(booleanValue) {
    tru(
      isTrue(
        { booleanValue },
        construct({
          target: ObjectOrFunctionParemeterName,
          args: ["booleanValue"]
        }).getName()
      )
    )
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require("cli-color")
  }

  getInstance() {
    return this.instance
  }
}

class PicoColorInstance {
  constructor(booleanValue) {
    tru(isTrue({ booleanValue }, new ObjectOrFunctionParemeterName("booleanValue").getName()))
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require("picocolors")
  }

  getInstance() {
    return this.instance
  }
}

module.exports = {
  Logger,
  SuccessorHelper,
  TernaryCompare,
  ObjectOrFunctionParemeterName,
  CLIColorInstance,
  PicoColorInstance
}
