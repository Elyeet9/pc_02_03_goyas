import Phaser from "phaser"

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    init() {

    }

    create() {
        this.bggame = this.add.sprite(
            this.game.config.width / 2,
            this.game.config.height / 2,
            'bggame'
        )
        this.bggame.setOrigin(0.5, 0.5);
        this.bggame.displayWidth = 800;
        this.bggame.displayHeight = 600;
    }
}

export default GameScene;