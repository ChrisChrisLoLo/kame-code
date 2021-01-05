import { LevelData } from "../objects/LevelData"
import { TileType } from '../objects/TileType';
import { Player, Flag } from '../objects/Entities';
import { DirectionType } from '../objects/Directions';
import { WinCondType } from "../objects/WinCondType";

export const sampleLevel: LevelData = {
    level: [
        [TileType.WHITE,TileType.WHITE],
        [TileType.WHITE,TileType.BLUE]
    ],
    player: {
        dir: DirectionType.SOUTH,
        pos: {x:0,y:0}
    },
    winCondition: WinCondType.GET_ALL_FLAGS,
    flags: [{pos: {x:1,y:1}}]
}