import React from 'react';

import { Stage, Sprite, Container } from '@inlet/react-pixi';
import { settings, SCALE_MODES} from 'pixi.js';
import { connect, ConnectedProps } from 'react-redux';
import { LevelData } from '../../logic/game/objects/LevelData';
import { sprites, tileSpriteEnumMap, turtleAngleDirMap } from './assets/turtl/sprites';

// Disable interpolation when scaling, will make texture be pixelated
settings.SCALE_MODE = SCALE_MODES.NEAREST;

interface StateProps {
  gameDisplay: LevelData
}

function mapStateToProps(state: StateProps) {
  const levelData = state.gameDisplay
  return levelData
}

const STAGE_WIDTH: number = 1200
const STAGE_HEIGHT: number = 800

const SPRITE_IMAGE_PX: number = 16
const TILE_SIZE_PX: number = 64
const TILE_SCALE: number = TILE_SIZE_PX/SPRITE_IMAGE_PX

const CONTAINER_PADDING_X = 50
const CONTAINER_PADDING_Y = 50

const CONTAINER_WIDTH: number = STAGE_WIDTH - 2*CONTAINER_PADDING_X
const CONTAINER_HEIGHT: number = STAGE_HEIGHT - 2*CONTAINER_PADDING_Y

export default function GameCanvas(props:StateProps) {
  
  const levelHeight: number = props.gameDisplay.level.length
  if (levelHeight == 0){
    console.error('Level has no rows in it!')
  }
  const levelWidth: number = props.gameDisplay.level[0].length

  const tileSprites = props.gameDisplay.level.map((row,i) => {
    return row.map((tile,j) => {
      return <Sprite
        image = {tileSpriteEnumMap.get(tile)}
        scale = {TILE_SCALE}
        x = {j*TILE_SIZE_PX}
        y = {i*TILE_SIZE_PX}
        zIndex = {0}
        key = {`${i},${j}`}
      />
    })
  })

  const flagSprites = props.gameDisplay.flags ? props.gameDisplay.flags.map(flag => 
    <Sprite
      image = {sprites.flag}
      scale = {TILE_SCALE}
      x={flag.pos.x*TILE_SIZE_PX}
      y={flag.pos.y*TILE_SIZE_PX}
      zIndex = {5}
      key = {`${flag.pos.x},${flag.pos.y}`}
    />
  ) : null;

  // console.log(props.flags)
  // console.log(flagSprites)

  // pivot is required to rotate sprite around the center
  // pivot is placed in the center of the sprite before scaling
  // because pivot causes a offset in the sprite, a readjustment needs to be made to the x and y
  const turtleSprite = <Sprite
    image = {sprites.turtle}
    scale = {TILE_SCALE}
    x={(props.gameDisplay.player.pos.x*TILE_SIZE_PX)+TILE_SIZE_PX/2}
    y={(props.gameDisplay.player.pos.y*TILE_SIZE_PX)+TILE_SIZE_PX/2}
    pivot={[SPRITE_IMAGE_PX/2,SPRITE_IMAGE_PX/2]}
    angle={turtleAngleDirMap.get(props.gameDisplay.player.dir)}
    zIndex = {10}
  />
            
  return (
    <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} style={{ width: '100%' }} options={{ backgroundColor: 0xeef1f5,  }}>
      <Container position={[CONTAINER_PADDING_X,CONTAINER_PADDING_Y]}>
        {tileSprites}
        {flagSprites}
        {turtleSprite}
      </Container>
    </Stage>
  )
}