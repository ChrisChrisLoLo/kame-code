import { createSlice } from '@reduxjs/toolkit'
import { rule110Sample } from './levels/rule110Sample';
import { sampleLevel } from './levels/sampleLevel'
import { LevelData } from './objects/LevelData'

import { setLevelDataReducer } from './reducers/setLevel'

/**
 * Slice is solely responsible for displaying to the user.
 * gameSlice is used for the actual game logic.
 */
export const gameDisplaySlice = createSlice({
    name: 'gameDisplay',
    initialState: rule110Sample.loadedLevel as LevelData,
    reducers: {
        setDisplayLevelData: setLevelDataReducer
    }
});

export const { 
        setDisplayLevelData
    } = gameDisplaySlice.actions

export default gameDisplaySlice.reducer