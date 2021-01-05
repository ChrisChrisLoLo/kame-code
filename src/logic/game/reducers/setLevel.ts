import { PayloadAction } from "@reduxjs/toolkit";
import { deepCopy } from "../../utils";
import { LevelData } from "../objects/LevelData"

export function setLevelDataReducer(state: LevelData, action: PayloadAction<LevelData>): LevelData{
  const newState:LevelData = deepCopy(action.payload)
  return newState
}