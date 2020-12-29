import { DirectionType, directionArray } from "./objects/Directions";
import { Position } from "./objects/Postion";

export function calcForward(dir: DirectionType, pos: Position): Position {
  switch (dir) {
    case DirectionType.NORTH:
      return new Position(pos.x, pos.y - 1)
    case DirectionType.EAST:
      return new Position(pos.x + 1, pos.y)
    case DirectionType.SOUTH:
      return new Position(pos.x, pos.y + 1)
    case DirectionType.WEST:
      return new Position(pos.x - 1, pos.y)
    default:
      throw new Error("Invalid position set");
  }
}

export function calcRotClockwise(dir: DirectionType): DirectionType {
  return directionArray[(directionArray.indexOf(dir) + 1) % directionArray.length]
}

export function calcRotCounterClockwise(dir: DirectionType): DirectionType {
  return directionArray[(directionArray.indexOf(dir) - 1) % directionArray.length]
}