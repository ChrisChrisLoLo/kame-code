import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../app/store';
import { LevelData } from '../../logic/game/objects/LevelData';
import GameCanvas from './GameCanvas';

type ParentProps = {
  isPlaybackOn: boolean
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

  const [playbackIndex, setPlaybackIndex] = useState(0)

  useEffect(() => {
    console.log('init')
    const timeout = setTimeout(() => {
      console.log(props.isPlaybackOn)
      if(props.isPlaybackOn){
        const newIndex = Math.min(playbackIndex+1,props.playbackQueue.length-1)
        setPlaybackIndex(newIndex)
      }
    }, PLAYBACK_MS);
    return () => clearTimeout(timeout)
  }, [props.isPlaybackOn, playbackIndex])


  let levelDataToDisplay: LevelData

  if(props.playbackQueue.length == 0){
    levelDataToDisplay = props.metaGameState.loadedLevel 
  }
  else{
    levelDataToDisplay = props.playbackQueue[playbackIndex]
  }

  return (
    <div>
      <GameCanvas gameDisplay={levelDataToDisplay}/>
    </div> 
  )
}

export default connector(GamePlayer)