import { PayloadAction } from "@reduxjs/toolkit";
import { deepCopy } from "../../utils";
import { LevelData } from "../objects/LevelData";

export function addLevelDataReducer(state:LevelData[], action: PayloadAction<LevelData>): LevelData[]{
  const stateQueue = deepCopy(state)
  stateQueue.push(action.payload)
  return stateQueue
}

export function clearQueueReducer(state:LevelData[]): LevelData[]{
  return []
}