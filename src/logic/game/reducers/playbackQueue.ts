import { PayloadAction } from "@reduxjs/toolkit";
import { deepCopy } from "../../utils";
import { LevelData } from "../objects/LevelData";


export function addLevelDataReducer(state:LevelData[], action: PayloadAction<LevelData>): LevelData[]{
  const actionQueue = deepCopy(state)
  actionQueue.push(action.payload)
  return actionQueue
}

export function clearQueueReducer(state:LevelData[]): LevelData[]{
  return []
}