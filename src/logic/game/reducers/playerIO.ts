import { PayloadAction } from "@reduxjs/toolkit";
import { deepCopy } from "../../utils";
import { LevelData } from "../objects/LevelData";
import { TileType } from "../objects/TileType";

export function writeBelowReducer(state: LevelData, action: PayloadAction<TileType>): LevelData {
    const newState: LevelData = deepCopy(state)
    const playerPos = newState.player.pos
    newState.level[playerPos.y][playerPos.x] = action.payload
    return newState
}

// export function 