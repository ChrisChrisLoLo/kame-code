import { Position } from './Postion';
import { DirectionType, directionArray } from './Directions';

// Each class must only contain attributes as they need to be serialized and deserialized easily

export class Player {
  dir: DirectionType
  pos: Position

  constructor(direction: DirectionType = DirectionType.SOUTH, position: Position = {x:0, y:0}){
    this.dir = direction
    this.pos = position
  }

  // calcForward(): Position{
  //   switch(this.dir){
  //     case DirectionType.NORTH:
  //       return new Position(this.pos.x, this.pos.y-1)
  //     case DirectionType.EAST:
  //       return new Position(this.pos.x+1, this.pos.y)
  //     case DirectionType.SOUTH:
  //       return new Position(this.pos.x, this.pos.y+1)
  //     case DirectionType.WEST:
  //       return new Position(this.pos.x-1, this.pos.y)
  //     default:
  //       throw new Error("Invalid position set");
  //   }
  // }

  // calcRotClockwise(): DirectionType{
  //   return directionArray[(directionArray.indexOf(this.dir)+1)%directionArray.length]
  // }

  // calcRotCounterClockwise(): DirectionType{
  //   return directionArray[(directionArray.indexOf(this.dir)-1)%directionArray.length]
  // }
}

export class Flag {
  position: Position

  constructor(position: Position){
    this.position = position
  }
}