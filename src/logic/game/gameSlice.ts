import { createSlice } from '@reduxjs/toolkit'
import { jsonify } from '../utils'
import { sampleLevel } from './levels/sampleLevel'
import { LevelData } from './objects/LevelData'

import { forwardReducer, backwardReducer} from './reducers/playerMovement'
import { rotClockwiseReducer, rotCounterClockwiseReducer } from './reducers/playerRotation'
import { setLevelDataReducer } from './reducers/setLevel'

export const gameSlice = createSlice({
    name: 'game',
    initialState: jsonify(sampleLevel) as LevelData,
    reducers: {
        forward: forwardReducer,
        backward: backwardReducer,
        rotClockwise: rotClockwiseReducer,
        rotCounterClockwise: rotCounterClockwiseReducer,
        setLevelData: setLevelDataReducer
        // readTile: readTileReducer,
        // writeTile: writeTileReducer
    }
});

// export const { 
//     forward, backward,
//     rotClockwise, rotCounterClockwise,
//     readTile, writeTile
// } = gameSlice.actions;
export const { 
        forward, backward,
        rotClockwise, rotCounterClockwise,
        setLevelData
    } = gameSlice.actions

export default gameSlice.reducer