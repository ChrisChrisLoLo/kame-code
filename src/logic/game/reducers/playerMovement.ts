import { LevelData } from "../objects/LevelData";
import { Position } from "../objects/Postion";
import { TileType } from "../objects/TileType";
import { calcMovement } from "../reducers";

export function forwardReducer(state: LevelData): LevelData {
  return movementReducer(state, false)
}

export function backwardReducer(state: LevelData): LevelData {
  return movementReducer(state, true)
}

function movementReducer(state: LevelData, isBackwards: boolean){
  const newState: LevelData = JSON.parse(JSON.stringify(state))

  newState.player.pos = { ...calcMovement(newState.player.dir, newState.player.pos, isBackwards) }

  if (isValidPlayerPosition(newState.player.pos, newState.level)) {
    return newState
  } else {
    return state
  }
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
      if (level[playerPos.y][playerPos.x] != TileType.EMPTY) {
        return true
      }
    }
  }
  return false
}