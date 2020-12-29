import { LevelData } from "../objects/LevelData"
import { TileType } from '../objects/TileType';
import { Player, Flag } from '../objects/Entities';
import { DirectionType } from '../objects/Directions';

export const sampleLevel = new LevelData(
    [
        [TileType.WHITE,TileType.WHITE],
        [TileType.WHITE,TileType.BLUE]
    ],
    new Player(DirectionType.SOUTH, {x:0,y:0}),
    [new Flag({x:1,y:1})]
);