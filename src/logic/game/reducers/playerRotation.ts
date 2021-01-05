import { deepCopy } from "../../utils";
import { DirectionType, directionArray } from "../objects/Directions";
import { LevelData } from "../objects/LevelData";

export function rotClockwiseReducer(state: LevelData): LevelData {
  return rotationReducer(state, false);
}

export function rotCounterClockwiseReducer(state: LevelData): LevelData {
  return rotationReducer(state, true);
}

function rotationReducer(state: LevelData, isCounterClockwise: boolean): LevelData {
  const newState: LevelData = deepCopy((state))
  newState.player.dir = calcRotation(newState.player.dir, isCounterClockwise) 
  return newState
}

function calcRotation(dir: DirectionType, isCounterClockwise: boolean): DirectionType {
  const rotation: number = isCounterClockwise ? -1 : 1
  return directionArray[mod((directionArray.indexOf(dir) + rotation), directionArray.length)]
}

/**
 * Use remainder operator to calculate modulo
 * @param n 
 * @param m 
 */
function mod(n: number, m: number): number {
  return ((n % m) + m) % m
}