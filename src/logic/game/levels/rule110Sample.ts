import { TileType } from '../objects/TileType';
import { DirectionType } from '../objects/Directions';
import { WinCondType } from "../objects/WinCondType";
import { MetaGame } from "../objects/MetaGame";

export const rule110Sample: MetaGame = {
  loadedLevel: {
    level: [
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.BLACK, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
      [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
    ],
    player: {
      dir: DirectionType.SOUTH,
      pos: { x: 0, y: 0 }
    },
    flags: [{ pos: { x: 2, y: 1 } }]
  },
  winCondition: WinCondType.GET_ALL_FLAGS,
  hasWon: false
}