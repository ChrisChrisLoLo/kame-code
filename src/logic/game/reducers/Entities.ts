import { LevelData } from "../objects/LevelData";
import { calcForward } from "../reducers";

export function forwardReducer(state: LevelData): LevelData{
    const newState: LevelData = JSON.parse(JSON.stringify(state));

    newState.player.pos = {...calcForward(newState.player.dir, newState.player.pos)};

    return newState
}