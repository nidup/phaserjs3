/// <reference path="../lib/phaser.d.ts"/>
import "phaser";
import {MainScene} from "./scenes/MainScene";

// main game configuration
const config: GameConfig = {
    width: 1200,
    height: 800,
    type: Phaser.AUTO,
    parent: "game",
    scene: MainScene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 }
        }
    }
};

class SimpleGame extends Phaser.Game {

    constructor(config?: GameConfig)
    {
        super(config);
    }
}

window.onload = () => {
    new SimpleGame(config);
};
