import { LevelData } from "./LevelData";
import { TileType } from "./TileType";
import { WinCondType } from "./WinCondType";

export interface MetaGame{
  loadedLevel: LevelData
  winCondition: WinCondType
  expectedLevel?: TileType[][]
  expectedOutput?: number | string
}