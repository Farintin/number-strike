import {Loop} from './js/game.js';
import {Player} from './js/characters.js';

let loop;
let player;

export function startGame() {
    let backgroundColor = '#214e66';
    loop = new Loop();
    
    player = new Player(backgroundColor)
};


export {loop};
