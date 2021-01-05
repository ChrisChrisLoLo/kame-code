import { createSlice } from "@reduxjs/toolkit";
import { sampleLevel } from "./levels/sampleLevel";
import { MetaGame } from "./objects/MetaGame";

export const metaGameSlice = createSlice({
  name: 'game',
  initialState: {loadedLevel: sampleLevel, hasWon: false} as MetaGame,
  reducers: {
  }
});

// export const { 
//       forward, backward,
//       rotClockwise, rotCounterClockwise
//   } = metaGameSlice.actions

export default metaGameSlice.reducer