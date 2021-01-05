import React from 'react';

import { Stage, Sprite } from '@inlet/react-pixi';
import { connect, ConnectedProps, RootStateOrAny } from 'react-redux';
import { LevelData } from '../logic/game/objects/LevelData';

interface StateProps {
  gameState: LevelData
}

function mapStateToProps(state: StateProps) {
  console.log(state)
  const levelData = state.gameState
  return levelData
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}

const WIDTH = 1200
const HEIGHT = 800

function GameCanvas(props:Props) {

  console.log('umpdate')

  

  return (
    <div>
      <Stage width={WIDTH} height={HEIGHT} style={{ width: '100%' }} options={{ backgroundColor: 0xeef1f5 }}>
        <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
          scale={{ x: 0.5, y: 0.5 }}
          anchor={0.5}
          x={150}
          y={150}
        />
      </Stage>
    </div>
  )
}

export default connector(GameCanvas)