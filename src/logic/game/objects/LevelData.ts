import { TileType } from './TileType';
import { Player, Flag } from './Entities';
import { WinCondType } from './WinCondType';

export class LevelData {
  level: TileType[][]
  player: Player
  winCondition: WinCondType
  expectedLevel?: TileType[][]
  expectedOutput?: number | string
  flags?: Flag[]

  constructor(level: TileType[][], player: Player,
      winCondition: WinCondType, expectedLevel?: TileType[][],
      expectedOutput?: number | string, flags?: Flag[],
      ){
    this.level = level
    this.player = player
    this.winCondition = winCondition
    if(expectedLevel){
      this.expectedLevel = expectedLevel
    }
    if(flags){
      this.flags = flags
    }
    if(expectedOutput){
      this.expectedOutput = expectedOutput
    }
  };
}