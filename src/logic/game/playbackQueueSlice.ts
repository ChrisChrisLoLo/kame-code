import { createSlice } from '@reduxjs/toolkit'
import { LevelData } from './objects/LevelData';
import { addLevelDataReducer, clearQueueReducer } from './reducers/playbackQueue'

export const playbackQueueSlice = createSlice({
    name: 'playbackQueue',
    initialState: [] as LevelData[],
    reducers: {
        addLevelData: addLevelDataReducer,
        clearQueue: clearQueueReducer,
    }
});

export const { 
        addLevelData, clearQueue
    } = playbackQueueSlice.actions

export default playbackQueueSlice.reducer