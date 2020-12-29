import { DirectionType, directionArray } from "./objects/Directions";
import { Position } from "./objects/Postion";

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
  return directionArray[(directionArray.indexOf(dir) + rotation) % directionArray.length]
}