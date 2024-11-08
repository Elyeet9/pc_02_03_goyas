import Phaser from "phaser"


class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.image('bgmenu', 'assets/fondos/menu.png');
        this.load.image('bggame', 'assets/fondos/game.png');
        this.load.image('bgGameover', 'assets/fondos/gam-over.jpg');
        this.load.image('amarillo', 'assets/amarillo.png');
        this.load.image('player', 'assets/player.png');
        this.load.image('rojo', 'assets/rojo.png');
        this.load.image('verde', 'assets/verde.png');
    }

    create() {
        console.log("Preload done, loading menu...");
        this.scene.start('MenuScene');
    }
}


export default PreloadScene;