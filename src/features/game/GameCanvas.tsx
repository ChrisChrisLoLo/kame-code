import React from 'react';

import { Stage, Sprite, Container } from '@inlet/react-pixi';
import { connect, ConnectedProps, RootStateOrAny } from 'react-redux';
import { LevelData } from '../../logic/game/objects/LevelData';

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

const STAGE_WIDTH: number = 1200
const STAGE_HEIGHT: number = 800

const TILE_WIDTH: number = 50

const CONTAINER_PADDING_X = 50
const CONTAINER_PADDING_Y = 50

const CONTAINER_WIDTH: number = STAGE_WIDTH - 2*CONTAINER_PADDING_X
const CONTAINER_HEIGHT: number = STAGE_HEIGHT - 2*CONTAINER_PADDING_Y

function GameCanvas(props:Props) {
  
  const levelHeight: number = props.level.length
  if (levelHeight == 0){
    console.error('Level has no rows in it!')
  }
  const levelWidth: number = props.level[0].length

  // const tileWidth = Math.floor(Math.min(STAGE_HEIGHT,STAGE_WIDTH)/Math.max(levelHeight,levelWidth))

  return (
    <div>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} style={{ width: '100%' }} options={{ backgroundColor: 0xeef1f5 }}>
        <Container position={[CONTAINER_PADDING_X,CONTAINER_PADDING_Y]}>
          <Sprite
            image="tile_red.pnd"
            height={TILE_WIDTH}
            width={TILE_WIDTH}
            anchor={0.5}
            x={0}
            y={0}
          />
        </Container>
      </Stage>
    </div>
  )
}

export default connector(GameCanvas)