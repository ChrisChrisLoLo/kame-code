import { createSlice } from '@reduxjs/toolkit'
import { sampleLevel } from './levels/sampleLevel'
import { LevelData } from './objects/LevelData'
import { writeBelowReducer } from './reducers/playerIO'

import { forwardReducer, backwardReducer} from './reducers/playerMovement'
import { rotClockwiseReducer, rotCounterClockwiseReducer } from './reducers/playerRotation'
import { setLevelDataReducer } from './reducers/setLevel'

export const gameSlice = createSlice({
    name: 'game',
    initialState: sampleLevel as LevelData,
    reducers: {
        forward: forwardReducer,
        backward: backwardReducer,
        rotClockwise: rotClockwiseReducer,
        rotCounterClockwise: rotCounterClockwiseReducer,
        writeBelow: writeBelowReducer,
        setLevelData: setLevelDataReducer,

        // readTile: readTileReducer,
        // writeTile: writeTileReducer
    }
});

export const { 
        forward, backward,
        rotClockwise, rotCounterClockwise,
        writeBelow,
        setLevelData
    } = gameSlice.actions

export default gameSlice.reducer