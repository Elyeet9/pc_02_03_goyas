import Phaser from "phaser"


class GameoverScene extends Phaser.Scene {
    constructor() {
        super("GameoverScene");
    }

    init(data) {
        this.finalScore = data.finalScore;
    }

    create() {
        // Background
        this.bgGameover = this.add.sprite(
            0, 0, 
            'bgGameover'
        )
        this.bgGameover.setOrigin(0,0);
        this.bgGameover.displayHeight = 600;
        this.bgGameover.displayWidth = 800;

        // Text
        this.txtGameover = this.add.text(
            this.game.config.width/2, 
            this.game.config.height/2 - 20,
            'YA ME FUI LA BIKA G_G',
            {
                fontFamily: 'Poppins',
                fontSize: '36px',
                color: '#FF00CF',
                strokeThickness: 4
            }
        )
        this.txtGameover.setOrigin(0.5, 0.5);
        this.txtFinalScore = this.add.text(
            this.game.config.width/2, 
            this.game.config.height/2 + 20,
            'Puntaje final: ' + this.finalScore,
            {
                fontFamily: 'Poppins',
                fontSize: '24px',
                color: '#FF00CF',
                strokeThickness: 4
            }
        );
        this.txtFinalScore.setOrigin(0.5, 0.5);
    }
}


export default GameoverScene;