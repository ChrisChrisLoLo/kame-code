import { TileType } from './TileType';
import { Player, Flag } from './Entities';
import { WinCondType } from './WinCondType';

export interface LevelData {
  level: TileType[][]
  player: Player
  flags?: Flag[]
}