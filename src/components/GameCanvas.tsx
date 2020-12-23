import React, { useRef, RefObject, useState, MutableRefObject } from 'react';

import { Stage, Sprite } from '@inlet/react-pixi';

export function GameCanvas() {    
    return(
        <div>
            <Stage width={1200} height={800} style={{width: '100%'}} options={{ backgroundColor: 0xeef1f5 }}>
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
