import { Environment } from "./environment"
import { Callable } from "./callable"
import { Interpreter, LoxValue } from "./interpreter"

import store from "../../app/store"
import { rotClockwise, rotCounterClockwise } from "../game/gameSlice"
import { forward, backward } from "../game/gameSlice"

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
      return makeMovement(false);
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
      return makeMovement(true);
    }
  }()
)

/**
 * Make movement, return true if the movement was successful
 * @param isBackward 
 */
function makeMovement(isBackward: boolean): boolean{
  const initPosition = store.getState().gameState.player.pos
  const movementFunc = isBackward ? backward : forward

  store.dispatch(movementFunc())
  const didMove: boolean = JSON.stringify(initPosition) != JSON.stringify(store.getState().gameState.player.pos)

  return didMove
}

globals.define(
  "turnRight",
  new class extends Callable {
    getArity() {
      return 0
    }

    call(interpreter: Interpreter, args: LoxValue[]) {
      return makeTurn(false);
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
      return makeTurn(true);
    }
  }()
)

/**
 * Make rotation, return true if successful
 * @param isCounterClockwise 
 */
function makeTurn(isCounterClockwise: boolean): boolean{
  const initPosition = store.getState().gameState.player.pos
  const rotationFunc = isCounterClockwise ? rotCounterClockwise : rotClockwise

  store.dispatch(rotationFunc())

  return true
}

export { globals }
