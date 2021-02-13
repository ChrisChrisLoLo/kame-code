import { TileType } from '../objects/TileType';
import { DirectionType } from '../objects/Directions';
import { WinCondType } from "../objects/WinCondType";
import { MetaGame } from "../objects/MetaGame";

export const sampleLevel: MetaGame = {
  testCases:[
    {
      name:'base case',
      levelData:{
        level: [
          [TileType.WHITE, TileType.WHITE],
          [TileType.WHITE, TileType.BLUE]
        ],
        player: {
          dir: DirectionType.SOUTH,
          pos: { x: 0, y: 0 }
        },
        flags: [{ pos: { x: 1, y: 1 } }]
      }
    }
  ],
  winCondition: WinCondType.GET_ALL_FLAGS
}