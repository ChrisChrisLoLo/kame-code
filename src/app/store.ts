import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import gameReducer from '../logic/game/gameSlice'
import metaGameReducer from '../logic/game/metaGameSlice'
import playbackQueueReducer from '../logic/game/playbackQueueSlice'

const rootReducer = combineReducers({
  gameState: gameReducer,
  metaGameState: metaGameReducer,
  playbackQueue: playbackQueueReducer
})

export default configureStore({
  reducer: rootReducer,
  // Disable immutableCheck due to performance decreases for large executions
  middleware: [...getDefaultMiddleware({immutableCheck: false, serializableCheck: false})]
})

export type RootState = ReturnType<typeof rootReducer>