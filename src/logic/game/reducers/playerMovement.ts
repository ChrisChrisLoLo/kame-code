import { isDeepEquality, deepCopy } from "../../utils";
import { DirectionType } from "../objects/Directions";
import { LevelData } from "../objects/LevelData";
import { Position } from "../objects/Postion";
import { TileType } from "../objects/TileType";

export function forwardReducer(state: LevelData): LevelData {
  return movementReducer(state, false)
}

export function backwardReducer(state: LevelData): LevelData {
  return movementReducer(state, true)
}

function movementReducer(state: LevelData, isBackwards: boolean){
  const newState: LevelData = deepCopy(state);

  newState.player.pos = { ...calcMovement(newState.player.dir, newState.player.pos, isBackwards) }

  if (isValidPlayerPosition(newState.player.pos, newState.level)) {
    const updatedState: LevelData = removeFlags(newState)
    return updatedState
  } else {
    return state
  }
}

function removeFlags(state: LevelData): LevelData{
  if(state.flags){
    state.flags = state.flags.filter(flag => !isDeepEquality(flag.pos,state.player.pos))
  }
  return state
}

/**
 * Return if the player position is within the bounds of the level and is not on an invalid tile
 * @param playerPos 
 * @param level 
 */
function isValidPlayerPosition(playerPos: Position, level: TileType[][]): boolean {
  const n = level.length
  const m = level[0].length

  if (playerPos.y >= 0 && playerPos.y < n) {
    if (playerPos.x >= 0 && playerPos.x < m) {
      if (level[playerPos.y][playerPos.x] !== TileType.EMPTY) {
        return true
      }
    }
  }
  return false
}

function calcMovement(dir: DirectionType, pos: Position, isBackwards: boolean): Position {

  const direction: number = isBackwards ? -1 : 1

  switch (dir) {
    case DirectionType.NORTH:
      return {x: pos.x, y: pos.y - direction}
    case DirectionType.EAST:
      return {x: pos.x + direction, y: pos.y}
    case DirectionType.SOUTH:
      return {x: pos.x, y: pos.y + direction}
    case DirectionType.WEST:
      return {x: pos.x - direction, y: pos.y}
    default:
      throw new Error("Invalid position set")
  }
}


// export function writeTileReducer(state: LevelData): LevelData{
//   const newState: LevelData = deepCopy(state)
//   newState.player
//   return newState
// }

// export function readTileReducer(state: LevelData): LevelData{
//   const newState: LevelData = deepCopy(state)
//   return newState
// }

// function tileReducer(state: LevelData, isRead: boolean): LevelData {
//   const newState: LevelData = deepCopy(state)
//   return newState
// }