import { createSlice } from '@reduxjs/toolkit'
import { jsonify } from '../utils';
import { sampleLevel } from './levels/sampleLevel';
import { LevelData } from './objects/LevelData';

import { forwardReducer, backwardReducer } from './reducers/playerMovement';

// const initState: LevelData = new LevelData(
//     [
//         [TileType.WHITE,TileType.WHITE],
//         [TileType.WHITE,TileType.BLUE]
//     ],
//     [new Player(DirectionType.SOUTH, {x:0,y:0})],
//     [new Flag({x:1,y:1})]
// );

// console.log(initState);

export const gameSlice = createSlice({
    name: 'game',
    initialState: <LevelData>jsonify(sampleLevel),
    reducers: {
        forward: forwardReducer,
        backward: backwardReducer
        // },
        // backward: state => {
        //     state = "d"
        // },
        // rotClockwise: state => {
        //     state = "d"
        // },
        // rotCounterClockwise: state => {
        //     state = "d"
        // },
        // readTile: state => {
        //     state = "d"
        // },
        // writeTile: state => {
        //     state = "d"
        // },
        // reset: state => {
        //     // TODO: THIS SOLUTION WON'T WORK IN THE LONG RUN
        //     state = initState
        // }
    }
});

// export const { 
//     forward, backward,
//     rotClockwise, rotCounterClockwise,
//     readTile, writeTile
// } = gameSlice.actions;
export const { 
        forward, backward
    } = gameSlice.actions;

export default gameSlice.reducer;