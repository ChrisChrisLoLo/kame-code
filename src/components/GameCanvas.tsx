import React, { useState } from 'react';

import { Stage, Sprite } from '@inlet/react-pixi';

export function GameCanvas() {
    
    return(
        <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
            <Sprite
                image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                scale={{ x: 0.5, y: 0.5 }}
                anchor={0.5}
                x={150}
                y={150}
            />
        </Stage>
    )
}
