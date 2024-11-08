import Phaser from "phaser"


class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.load.image('bgmenu', 'assets/fondos/menu.png');
    }
    
    create() {
        this.scene.start('MenuScene');
    }
}


export default PreloadScene;