import turtle from './turtle.png'
import flag from './flag.png'
import tileBlack from './tile_black.png'
import tileBlue from './tile_blue.png'
import tileEmpty from './tile_empty.png'
import tileWhite from './tile_white.png'
import { TileType } from '../../../../logic/game/objects/TileType'
import { DirectionType } from '../../../../logic/game/objects/Directions'

export const sprites = {
  turtle: turtle,
  flag: flag,
  tileBlack: tileBlack,
  tileBlue: tileBlue,
  tileEmpty: tileEmpty,
  tileWhite: tileWhite
}

export const tileSpriteEnumMap = new Map<TileType, string>([
  [TileType.BLACK, tileBlack],
  [TileType.BLUE, tileBlue],
  [TileType.EMPTY, tileEmpty],
  [TileType.WHITE, tileWhite],
])

export const turtleAngleDirMap = new Map<DirectionType, number>([
  [DirectionType.NORTH, 180],
  [DirectionType.EAST, 270],
  [DirectionType.SOUTH, 0],
  [DirectionType.WEST, 90],
])