import { Environment } from "./environment"
import { Callable } from "./callable"
import { Interpreter, LoxValue } from "./interpreter"
import { makeMovement, makeTurn, readTileBelow, writeTileBelow } from "../game/actions/playerActions"

const globals = new Environment()

globals.define(
  "clock",
  new class extends Callable {
    getArity() {
      return 0
    }

    call() {
      return Date.now()
    }
  }()
)

globals.define(
  "forward",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return makeMovement(false)
    }
  }()
)

globals.define(
  "backward",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return makeMovement(true)
    }
  }()
)

globals.define(
  "turnRight",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return makeTurn(false)
    }
  }()
)

globals.define(
  "turnLeft",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return makeTurn(true)
    }
  }()
)

globals.define(
  "readBelow",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return readTileBelow()
    }
  }()
)

globals.define(
  "writeBelow",
  new class extends Callable {
    getArity() {
      return 1
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      if (typeof args[0] != 'string') {
        throw new Error(`writeBelow: ${args[0]} is not a string`)
      }
      return writeTileBelow(args[0])
    }
  }()
)


export { globals }
