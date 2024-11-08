import Phaser from "phaser"


class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        this.bgmenu = this.add.tileSprite(
            0,0, 
            this.game.config.width, 
            this.game.config.height, 
            'bgmenu'
        );
        this.bgmenu.setOrigin(0,0);
    }
}


export default MenuScene;