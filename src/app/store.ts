import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../logic/game/gameSlice'
import metaGameReducer from '../logic/game/metaGameSlice'

export default configureStore({
  reducer: {
    gameState: gameReducer,
    metaGameState: metaGameReducer
  }
})