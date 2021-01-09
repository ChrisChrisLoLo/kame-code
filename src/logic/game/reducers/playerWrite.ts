import { PayloadAction } from "@reduxjs/toolkit";
import { deepCopy } from "../../utils";
import { DirectionType, directionArray } from "../objects/Directions";
import { LevelData } from "../objects/LevelData";

export function writeToBoardReducer(state: LevelData, action: PayloadAction<string>): LevelData {
    const newState: LevelData = deepCopy(state)
    // newState.level newState.player.pos
    return newState
}
