import { createSlice } from '@reduxjs/toolkit'
import { sampleLevel } from './levels/sampleLevel';
import { DirectionType } from './objects/Directions';
import { Player, Flag } from './objects/Entities';
import { LevelData } from './objects/LevelData';
import { TileType } from './objects/TileType';
import { calcForward } from './reducers';
import { forwardReducer } from './reducers/Entities';

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
    initialState: sampleLevel,
    reducers: {
        forward: forwardReducer
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
        forward
    } = gameSlice.actions;

export default gameSlice.reducer;