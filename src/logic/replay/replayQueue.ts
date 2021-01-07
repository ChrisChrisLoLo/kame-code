import store from "../../app/store";
import { setDisplayLevelData } from "../game/gameDisplaySlice";
import { LevelData } from "../game/objects/LevelData";

const SLEEP_TIME_MS = 500

/**
 * Play back the recorded LevelData states created. Delay between each state.
 * Uses a sleep method rather than directly using multiple setTimeouts() in attempt to reduce drift and increase precision.
 */
export async function playRecordedLevelStates() {
  const queue: LevelData[] = store.getState().playbackQueue
  for (const levelData of queue){
    store.dispatch(setDisplayLevelData(levelData))
    await sleep(SLEEP_TIME_MS)
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}