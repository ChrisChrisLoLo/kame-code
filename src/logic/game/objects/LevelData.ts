import { TileType } from './TileType';
import { Player, Flag } from './Entities';

export class LevelData {
  level: TileType[][]
  player: Player
  flags: Flag[]
  // winCondition: WinCondType

  constructor(level: TileType[][], player: Player, flags: Flag[]){
    this.level = level;
    this.player = player;
    this.flags = flags;
  };
}