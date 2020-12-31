import { LevelData } from "./LevelData";

export class MetaGame{
  loadedLevel: LevelData
  hasWon: boolean

  constructor(loadedLevel: LevelData, hasWon: boolean = false){
    this.loadedLevel = loadedLevel
    this.hasWon = hasWon
  }
}