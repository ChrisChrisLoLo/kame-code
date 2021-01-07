import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../logic/game/gameSlice'
import gameDisplayReducer from '../logic/game/gameDisplaySlice'
import metaGameReducer from '../logic/game/metaGameSlice'
import playbackQueueReducer from '../logic/game/playbackQueueSlice'

export default configureStore({
  reducer: {
    gameState: gameReducer,
    gameDisplay: gameDisplayReducer,
    metaGameState: metaGameReducer,
    playbackQueue: playbackQueueReducer
  }
})