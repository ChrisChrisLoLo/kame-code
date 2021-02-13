import React, { useState } from 'react';

import { connect, ConnectedProps } from 'react-redux';

import AceEditor from "react-ace";

// for javascript 
// https://github.com/securingsincity/react-ace/issues/725#issuecomment-543109155

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import { runInterpreter } from '../../logic/tslox/lox';
import store, { RootState } from '../../app/store';
import { setLevelData } from '../../logic/game/gameSlice';
import { addLevelData, clearQueue } from '../../logic/game/playbackQueueSlice';
import GamePlayer from './GamePlayer';
import hasUserWon from '../../logic/game/reactHelpers/hasUserWon';
import { metaGameSlice } from '../../logic/game/metaGameSlice';

const mapStateToProps = (state: RootState) => ({
  metaGameState: state.metaGameState,
  playbackQueue: state.playbackQueue
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

function Game(props: Props) {
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
    store.dispatch(setLevelData(store.getState().metaGameState.testCases[store.getState().metaGameState.currentTestCase].levelData))
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
    <div>
      <div className="flex bg-green-400">
        <h2>
          Level Title
        </h2>
      </div>
      <div className="flex bg-green-400">
        <div className="flex-auto m-3">
          <GamePlayer
            isPlaybackOn={isPlaybackOn}
            playbackIndex={playbackIndex}
            setPlaybackIndex={setPlaybackIndex}
            setIsPlaybackOn={setIsPlaybackOn}
            hasUserWon={hasWon}
            metaGameState={props.metaGameState}
            playbackQueue={props.playbackQueue}
          />
        </div>
        <div className="flex-auto m-3">
          <AceEditor
            className="rounded"
            style={{fontSize: "13pt"}}
            mode="javascript"
            theme="monokai"
            onChange={onEditorChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
          <button onClick={runCode} className="bg-green-200">
            Run
          </button>
          {/* <TestCases/> */}
        </div>
      </div>
    </div>
  )
}

export default connector(Game)