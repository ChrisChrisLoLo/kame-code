import { createSlice } from "@reduxjs/toolkit";
import { jsonify } from "../utils";
import { sampleLevel } from "./levels/sampleLevel";
import { MetaGame } from "./objects/MetaGame";

export const metaGameSlice = createSlice({
  name: 'game',
  initialState: jsonify(new MetaGame(sampleLevel)) as MetaGame,
  reducers: {
  }
});

// export const { 
//       forward, backward,
//       rotClockwise, rotCounterClockwise
//   } = metaGameSlice.actions

export default metaGameSlice.reducer