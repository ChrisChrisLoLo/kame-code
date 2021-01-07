import store from "../../../app/store"
import { backward, forward, rotCounterClockwise, rotClockwise } from "../gameSlice"

/**
 * Make movement, return true if the movement was successful
 * @param isBackward 
 */
export function makeMovement(isBackward: boolean): boolean{
  const initPosition = store.getState().gameState.player.pos
  const movementFunc = isBackward ? backward : forward

  store.dispatch(movementFunc())
  const didMove: boolean = JSON.stringify(initPosition) != JSON.stringify(store.getState().gameState.player.pos)

  return didMove
}

/**
 * Make rotation, return true if successful
 * @param isCounterClockwise 
 */
export function makeTurn(isCounterClockwise: boolean): boolean{
  const initPosition = store.getState().gameState.player.pos
  const rotationFunc = isCounterClockwise ? rotCounterClockwise : rotClockwise

  store.dispatch(rotationFunc())

  return true
}

