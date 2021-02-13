import { PayloadAction } from "@reduxjs/toolkit";
import { LevelData } from "../objects/LevelData";

export function addLevelDataReducer(state:LevelData[], action: PayloadAction<LevelData>): LevelData[]{
  const stateQueue = [...state]
  stateQueue.push(action.payload)
  return stateQueue
}

export function clearQueueReducer(state:LevelData[]): LevelData[]{
  return []
}