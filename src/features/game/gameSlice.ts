

import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        value: 0
    },
    reducers: {
        forward: state => {
            state.value++
        },
        backward: state => {
            state.value++
        },
        rotClockwise: state => {
            state.value++
        },
        rotCounterClockwise: state => {
            state.value++
        },
        readTile: state => {
            state.value++
        },
        writeTile: state => {
            state.value++
        }
    }
});

export const { 
    forward, backward,
    rotClockwise, rotCounterClockwise,
    readTile, writeTile
} = gameSlice.actions;

export default gameSlice.reducer;