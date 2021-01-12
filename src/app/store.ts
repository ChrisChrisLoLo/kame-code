import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from '../logic/game/gameSlice'
import metaGameReducer from '../logic/game/metaGameSlice'
import playbackQueueReducer from '../logic/game/playbackQueueSlice'

const rootReducer = combineReducers({
  gameState: gameReducer,
  metaGameState: metaGameReducer,
  playbackQueue: playbackQueueReducer
})

export default configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>