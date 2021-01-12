import { isDeepEquality } from "../../utils";
import { LevelData } from "../objects/LevelData";
import { MetaGame } from "../objects/MetaGame";
import { WinCondType } from "../objects/WinCondType"

/**
 * Check if the user has won by checking if the last state of the game satisfies the condition
 * @param metaGame 
 * @param lastGameState 
 */
export default function hasUserWon(metaGame: MetaGame, lastGameState: LevelData): boolean{
  switch(metaGame.winCondition){
    case WinCondType.GET_ALL_FLAGS:
      return lastGameState.flags?.length === 0
    case WinCondType.MODIFY_BOARD:
      return isDeepEquality(metaGame.expectedLevel, lastGameState.level)
    default:
      throw new Error(`Win condition ${WinCondType[metaGame.winCondition]} has not yet been implemented!`)
  }
}