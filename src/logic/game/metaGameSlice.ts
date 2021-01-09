import { createSlice } from "@reduxjs/toolkit";
import { rule110Sample } from "./levels/rule110Sample";
import { sampleLevel } from "./levels/sampleLevel";
import { MetaGame } from "./objects/MetaGame";

export const metaGameSlice = createSlice({
  name: 'game',
  initialState: rule110Sample as MetaGame,
  reducers: {
  }
});

// export const { 
//       forward, backward,
//       rotClockwise, rotCounterClockwise
//   } = metaGameSlice.actions

export default metaGameSlice.reducer