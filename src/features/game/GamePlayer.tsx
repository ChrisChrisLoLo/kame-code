import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../app/store';
import { LevelData } from '../../logic/game/objects/LevelData';
import GameCanvas from './GameCanvas';


// Redux
// interface StateProps {
//   playbackQueue: LevelData[]
// }

const mapStateToProps = (state: RootState) => ({
  metaGameState: state.metaGameState,
  playbackQueue: state.playbackQueue
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

function GamePlayer(props:Props) {
  
  let levelDataToDisplay: LevelData

  if(props.playbackQueue.length == 0){
    levelDataToDisplay = props.metaGameState.loadedLevel 
  }
  else{
    levelDataToDisplay = props.playbackQueue[0]
  }

  return (
    <div>
      <GameCanvas gameDisplay={levelDataToDisplay}/>
    </div> 
  )
}

export default connector(GamePlayer)