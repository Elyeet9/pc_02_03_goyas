import Phaser from "phaser"


class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        console.log("Menu loading...");
        this.bgmenu = this.add.sprite(
            this.game.config.width/2, 
            this.game.config.height/2, 
            'bgmenu'
        )
        this.bgmenu.setOrigin(0.5,0.5);
        this.bgmenu.displayWidth = 800;
        this.bgmenu.displayHeight = 600;
        this.title = this.add.text(
            this.game.config.width/2, 
            this.game.config.height/2 - 20,
            'Bica 4 life G_G and forever',
            {
                fontFamily: 'Poppins',
                fontSize: '36px',
                color: '#FF00CF',
                strokeThickness: 4
            }
        )
        this.title.setOrigin(0.5, 0.5);
        this.name = this.add.text(
            this.game.config.width/2, 
            this.game.config.height/2 + 20,
            'Leonardo Andre Goyas Ayllon',
            {
                fontFamily: 'Poppins',
                fontSize: '24px',
                color: '#FF00CF',
                strokeThickness: 4
            }
        )
        this.name.setOrigin(0.5, 0.5);

        // Button to go to game scene
        this.input.on('pointerdown', this.start, this);
    }
    
    start() {
        this.scene.start('GameScene');
    }
}


export default MenuScene;