import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../logic/game/gameSlice';

export default configureStore({
  reducer: {
    gameState: gameReducer
  }
})