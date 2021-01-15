import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../app/store';
import { LevelData } from '../../logic/game/objects/LevelData';
import GameCanvas from './GameCanvas';

type ParentProps = {
  setIsPlaybackOn: Function
  isPlaybackOn: boolean
  setPlaybackIndex: Function
  playbackIndex: number
  hasUserWon: boolean
}

const mapStateToProps = (state: RootState) => ({
  metaGameState: state.metaGameState,
  playbackQueue: state.playbackQueue
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & ParentProps

const PLAYBACK_MS = 500

function GamePlayer(props:Props) {

  useEffect(() => {
    console.log('init')
    const timeout = setTimeout(() => {
      console.log(props.playbackIndex)
      if(props.isPlaybackOn){
        const newIndex = Math.min(props.playbackIndex+1,props.playbackQueue.length-1)
        console.log('new Ind: '+ newIndex)
        props.setPlaybackIndex(newIndex)
      }
    }, PLAYBACK_MS);
    return () => clearTimeout(timeout)
  }, [props.isPlaybackOn, props.playbackIndex])

  let levelDataToDisplay: LevelData

  if(props.playbackQueue.length === 0){
    levelDataToDisplay = props.metaGameState.loadedLevel 
  }
  else{
    levelDataToDisplay = props.playbackQueue[props.playbackIndex]
  }

  let hasUserWonEl
  if(props.playbackIndex === props.playbackQueue.length-1){
    hasUserWonEl = props.hasUserWon ? <h1>Winner!</h1> : <h1>Try again!</h1>
  }

  return (
    <div>
      <GameCanvas gameDisplay={levelDataToDisplay}/>
      <input 
        className="w-full"
        type="range"
        onChange={(e)=>{
          props.setPlaybackIndex(parseInt(e.target.value))
          props.setIsPlaybackOn(false)
        }}
        min={0}
        max={props.playbackQueue.length-1} 
        value={props.playbackIndex}
      />

      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

*/}
      <div>
        <button className="bg-green-500 hover:bg-green-600 text-white hover:text-gray-100 w-6 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
          </svg>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white hover:text-gray-100 w-6 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
          </svg>
        </button>
      </div>
      {hasUserWonEl}
    </div> 
  )
}

export default connector(GamePlayer)