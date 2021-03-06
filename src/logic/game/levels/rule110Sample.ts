import { TileType } from '../objects/TileType';
import { DirectionType } from '../objects/Directions';
import { WinCondType } from "../objects/WinCondType";
import { MetaGame } from "../objects/MetaGame";

export const rule110Sample: MetaGame = {
  testCases: [
    {
      name:'base case',
      levelData: { 
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
      }
    },
    {
      name:'small case',
      levelData: { 
        level: [
          [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
          [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
          [TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE, TileType.WHITE],
        ],
        player: {
          dir: DirectionType.SOUTH,
          pos: { x: 0, y: 0 }
        },
        flags: [{ pos: { x: 2, y: 1 } }]
      }
    }
  ],
  winCondition: WinCondType.GET_ALL_FLAGS
}