import { jsonify } from "../../utils";
import { DirectionType, directionArray } from "../objects/Directions";
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
  const newState: LevelData = jsonify(state)

  newState.player.pos = { ...calcMovement(newState.player.dir, newState.player.pos, isBackwards) }

  if (isValidPlayerPosition(newState.player.pos, newState.level)) {
    return newState
  } else {
    return state
  }
}

export function rotClockwiseReducer(state: LevelData): LevelData {
  return rotationReducer(state, false);
}

export function rotCounterClockwiseReducer(state: LevelData): LevelData {
  return rotationReducer(state, true);
}

function rotationReducer(state: LevelData, isCounterClockwise: boolean): LevelData{
  const newState: LevelData = JSON.parse(JSON.stringify(state))
  newState.player.dir = calcRotation(newState.player.dir, isCounterClockwise) 
  return newState
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

export function calcMovement(dir: DirectionType, pos: Position, isBackwards: boolean): Position {

  const direction: number = isBackwards ? -1 : 1

  switch (dir) {
    case DirectionType.NORTH:
      return new Position(pos.x, pos.y - direction)
    case DirectionType.EAST:
      return new Position(pos.x + direction, pos.y)
    case DirectionType.SOUTH:
      return new Position(pos.x, pos.y + direction)
    case DirectionType.WEST:
      return new Position(pos.x - direction, pos.y)
    default:
      throw new Error("Invalid position set");
  }
}

export function calcRotation(dir: DirectionType, isCounterClockwise: boolean): DirectionType {
  const rotation: number = isCounterClockwise ? -1 : 1
  return directionArray[mod((directionArray.indexOf(dir) + rotation), directionArray.length)]
}

/**
 * Use remainder operator to calculate modulo
 * @param n 
 * @param m 
 */
function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}