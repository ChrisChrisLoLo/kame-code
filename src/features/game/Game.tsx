import React, { useState } from 'react';
import GameCanvas from './GameCanvas'

import AceEditor from "react-ace";

// for javascript 
// https://github.com/securingsincity/react-ace/issues/725#issuecomment-543109155

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import { runInterpreter } from '../../logic/tslox/lox';
import store from '../../app/store';
import { setLevelData } from '../../logic/game/gameSlice';
import { addLevelData, clearQueue } from '../../logic/game/playbackQueueSlice';
import { playRecordedLevelStates } from '../../logic/replay/replayQueue';
import { setDisplayLevelData } from '../../logic/game/gameDisplaySlice';
import GamePlayer from './GamePlayer';

export function Game() {
  const [code, setCode] = useState('')
  const [isPlaybackOn, setIsPlaybackOn] = useState(false)

  function onEditorChange(newValue: string) {
    setCode(newValue);
  }

  function runCode() {
    setIsPlaybackOn(false)
    // reset level
    store.dispatch(setLevelData(store.getState().metaGameState.loadedLevel))
    // reset display (MIGHT NOT NEED NOW)
    store.dispatch(setDisplayLevelData(store.getState().metaGameState.loadedLevel))
    // reset queue
    store.dispatch(clearQueue())
    // add initial state to the queue
    store.dispatch(addLevelData(store.getState().gameState))

    runInterpreter(code)
    // playRecordedLevelStates()
    setIsPlaybackOn(true)
    // TODO: when at the end of the queue determine if the victory state has been acheived.
  }

  return (
    <div className="flex">
      <GamePlayer isPlaybackOn={isPlaybackOn}/>
      <div>
        <AceEditor
          mode="python"
          theme="monokai"
          onChange={onEditorChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
        <button onClick={runCode} className="bg-green-200">
          Run
        </button>
        {/* <button onClick={test} className="bg-green-200">
          Run
        </button> */}
      </div>
    </div>
  )
}