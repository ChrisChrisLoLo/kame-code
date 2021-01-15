import React, { useState } from 'react';
import GameCanvas from './GameCanvas'

import AceEditor from "react-ace";

// for javascript 
// https://github.com/securingsincity/react-ace/issues/725#issuecomment-543109155

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import { runInterpreter } from '../../logic/tslox/lox';
import store from '../../app/store';
import { setLevelData } from '../../logic/game/gameSlice';
import { addLevelData, clearQueue } from '../../logic/game/playbackQueueSlice';
import GamePlayer from './GamePlayer';
import hasUserWon from '../../logic/game/reactHelpers/hasUserWon';

export function Game() {
  const [code, setCode] = useState('')
  const [isPlaybackOn, setIsPlaybackOn] = useState(false)
  const [playbackIndex, setPlaybackIndex] = useState(0)
  const [hasWon, setHasWon] = useState(false)

  function onEditorChange(newValue: string) {
    setCode(newValue);
  }

  function runCode() {
    setIsPlaybackOn(false)
    setPlaybackIndex(0)
    // reset level
    store.dispatch(setLevelData(store.getState().metaGameState.loadedLevel))
    // reset queue
    store.dispatch(clearQueue())
    // add initial state to the queue
    store.dispatch(addLevelData(store.getState().gameState))

    runInterpreter(code)
    
    setHasWon(hasUserWon(store.getState().metaGameState, store.getState().gameState))

    setIsPlaybackOn(true)
    // TODO: when at the end of the queue determine if the victory state has been acheived.\
  }

  return (
    <div className="flex bg-green-400">
      <div className="flex-auto m-3">
        <GamePlayer
          isPlaybackOn={isPlaybackOn}
          playbackIndex={playbackIndex}
          setPlaybackIndex={setPlaybackIndex}
          hasUserWon={hasWon}
        />
      </div>
      <div className="flex-auto m-3">
        <AceEditor
          className="rounded"
          style={{fontSize: "12pt"}}
          mode="javascript"
          theme="monokai"
          onChange={onEditorChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
        <button onClick={runCode} className="bg-green-200">
          Run
        </button>
      </div>
    </div>
  )
}