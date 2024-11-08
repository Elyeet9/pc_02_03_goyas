import Phaser from "phaser"


class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.image('bgmenu', 'assets/fondos/menu.png');
        this.load.image('bggame', 'assets/fondos/game.png');
    }

    create() {
        console.log("Preload done, loading menu...");
        this.scene.start('MenuScene');
    }
}


export default PreloadScene;