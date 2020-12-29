import { Environment } from "./environment"
import { Callable } from "./callable"
import { Interpreter, LoxValue } from "./interpreter"

import store from "../../app/store"
import gameSlice from "../game/gameSlice"
import { forward } from "../game/gameSlice"

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
      // console.log(gameSlice.reducer({value: 2},forward))
      store.dispatch(forward())
      return 1
    }
  }()
)

export { globals }
