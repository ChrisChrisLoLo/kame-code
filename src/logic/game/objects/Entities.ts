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
}

export class Flag {
  pos: Position

  constructor(pos: Position){
    this.pos = pos
  }
}