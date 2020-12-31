import { PayloadAction } from "@reduxjs/toolkit";
import { jsonify } from "../../utils";
import { LevelData } from "../objects/LevelData"

export function setLevelDataReducer(state: LevelData, action: PayloadAction<LevelData>): LevelData{
  const newState:LevelData = jsonify(action.payload)
  return newState
}