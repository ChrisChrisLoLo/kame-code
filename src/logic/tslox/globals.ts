import { Environment } from "./environment"
import { Callable } from "./callable"
import { Interpreter, LoxValue } from "./interpreter"
import { dispatchAndRecord, makeMovement, makeTurn } from "../game/actions/playerActions"

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
      return dispatchAndRecord(() => makeMovement(false))
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
      return dispatchAndRecord(() => makeMovement(true))
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
      return dispatchAndRecord(() => makeTurn(false))
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
      return dispatchAndRecord(() => makeTurn(true))
    }
  }()
)

export { globals }
