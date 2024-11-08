import Phaser from "phaser"

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    init() {
        this.speed = 100;
        this.score = 0;
        this.lives = 3;
    }

    create() {
        // Background
        this.bggame = this.add.sprite(
            this.game.config.width / 2,
            this.game.config.height / 2,
            'bggame'
        );
        this.bggame.setOrigin(0.5, 0.5);
        this.bggame.displayWidth = 800;
        this.bggame.displayHeight = 600;

        //Player
        this.player = this.add.sprite(
            200,
            this.game.config.height / 2,
            'player'
        );
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.W)) {
            this.player.setTexture('amarillo');
        }
        if(Phaser.Input.Keyboard.JustDown(this.A)) {
            this.player.setTexture('player');
        }
        if(Phaser.Input.Keyboard.JustDown(this.S)) {
            this.player.setTexture('rojo');
        }
        if(Phaser.Input.Keyboard.JustDown(this.D)) {
            this.player.setTexture('verde');
        }
    }
}

export default GameScene;