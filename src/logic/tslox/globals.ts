import { Environment } from "./environment"
import { Callable } from "./callable"
import { Interpreter, LoxValue } from "./interpreter"

import store from "../../app/store"
import gameSlice from "../../features/game/gameSlice"
import { forward } from "../../features/game/gameSlice"

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
      return 1
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      // console.log(gameSlice.reducer({value: 2},forward))
      store.dispatch(forward())
      return "forward"
    }
  }()
)

export { globals }
