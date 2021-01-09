import store from "../../../app/store"
import { backward, forward, rotCounterClockwise, rotClockwise } from "../gameSlice"
import { TileType } from "../objects/TileType"
import { addLevelData } from "../playbackQueueSlice"

/**
 * Make movement, return true if the movement was successful
 * @param isBackward 
 */
export function makeMovement(isBackward: boolean): boolean{
  const initPosition = store.getState().gameState.player.pos
  const movementFunc = isBackward ? backward : forward

  dispatchAndRecord(()=>store.dispatch(movementFunc()))
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

  dispatchAndRecord(()=>store.dispatch(rotationFunc()))

  return true
}

/**
 * Read tile below, return it's type as a string
 * The string will be the lowercase form of the TileTypeEnum
 */
export function readTileBelow(): string{
  const playerPos = store.getState().gameState.player.pos
  const tileBelow = store.getState().gameState.level[playerPos.y][playerPos.x]
  return TileType[tileBelow].toLowerCase()
}

/**
 * Write tile below, return true if it was successful, throw errors otherwise
 */
export function writeTileBelow(inputTile: string): boolean{
  
  if (!(inputTile.toUpperCase() in TileType)){
    throw `${inputTile} is not a valid tile type!`
  }

  const tile: TileType = (<any>TileType)[inputTile.toUpperCase()]

  store.dispatch(()=>store.dispatch(writeTileBelow()))

  return true
}

/**
 * Executes a function and then records the resulting level state
 */
export function dispatchAndRecord(toExecute: Function): any{
  const result = toExecute()
  store.dispatch(addLevelData(store.getState().gameState))
  return result
}