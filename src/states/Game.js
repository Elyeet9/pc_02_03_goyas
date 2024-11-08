import Phaser from "phaser"

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    init() {
        this.speed = 200;
        this.timer = 0;
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
        this.streakMultiplier = 1;
        this.playerTexture = 'player';
    }

    create() {
        this.initBackground();
        this.initPlayer();
        this.initTexts();
        this.initEnemies();
    }

    initBackground() {
        // Background
        this.bggame = this.add.sprite(
            this.game.config.width / 2,
            this.game.config.height / 2,
            'bggame'
        );
        this.bggame.setOrigin(0.5, 0.5);
        this.bggame.displayWidth = 1200;
        this.bggame.displayHeight = 600;
    }

    initPlayer() {
        //Player
        this.player = this.physics.add.sprite(
            200,
            this.game.config.height / 2,
            this.playerTexture
        );
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    initTexts() {
        // Timer
        this.txtTimer = this.add.text(
            10, 10,
            'Tiempo: 0',
            {
                fontFamily: 'Poppins',
                fontSize: '16px',
                fill: '#fff'
            }
        )
        this.txtTimer.setOrigin(0,0);
        this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
        // Lives
        this.txtLives = this.add.text(
            10, 40,
            'Vidas: <3 <3 <3',
            {
                fontFamily: 'Poppins',
                fontSize: '16px',
                fill: '#fff'
            }
        )
        // Score
        this.txtScore = this.add.text(
            this.game.config.width - 10, 10,
            'Puntaje: 0',
            {
                fontFamily: 'Poppins',
                fontSize: '16px',
                fill: '#fff'
            }
        )
        this.txtScore.setOrigin(1,0);
        // Streak
        this.txtStreak = this.add.text(
            this.game.config.width - 10, 
            this.game.config.height - 10,
            'Racha: x1',
            {
                fontFamily: 'Poppins',
                fontSize: '16px',
                fill: '#fff'
            }
        )
        this.txtStreak.setOrigin(1,1);
    }

    initEnemies() {
        this.enemies = this.physics.add.group();
        this.time.addEvent({
            delay: 2000,
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true
        });
        this.physics.add.overlap(
            this.player, 
            this.enemies, 
            this.handleCollision, 
            null, this
        );
    }

    update(time, delta) {
        this.player.setVelocity(0);
        console.log(this.lives);
        
        // Texture change
        if(Phaser.Input.Keyboard.JustDown(this.W)) {
            this.playerTexture = 'amarillo';
            this.player.setTexture(this.playerTexture);
        }
        if(Phaser.Input.Keyboard.JustDown(this.A)) {
            this.playerTexture = 'player';
            this.player.setTexture(this.playerTexture);
        }
        if(Phaser.Input.Keyboard.JustDown(this.S)) {
            this.playerTexture = 'rojo';
            this.player.setTexture(this.playerTexture);
        }
        if(Phaser.Input.Keyboard.JustDown(this.D)) {
            this.playerTexture = 'verde';
            this.player.setTexture(this.playerTexture);
        }

        // Player Movement
        if(this.W.isDown) {
            this.player.body.setVelocityY(-this.speed);
        }
        if(this.S.isDown) {
            this.player.body.setVelocityY(this.speed);
        }

        // Remove Enemies
        this.enemies.children.each(function(enemy) {
            if(enemy.x < -enemy.width) {
                enemy.destroy();
                this.streak = 0;
            }
        }, this);
    }

    spawnEnemy() {
        // Spawn Enemy
        let y = Phaser.Math.Between(50, this.game.config.height - 50);
        const textures = ['amarillo', 'rojo', 'verde'];
        let texture = Phaser.Utils.Array.GetRandom(textures);
        let enemy = this.enemies.create(this.game.config.width, y, texture);
        enemy.setVelocityX(-this.speed);
    }

    handleCollision(player, enemy) {
        if(player.texture.key === enemy.texture.key) {
            this.streak++;
            this.updateStreak();
            this.updateScore();
            enemy.destroy();
        } else {
            this.streak = 0;
            this.updateStreak();
            this.updateLives();
            enemy.destroy();
            if(this.lives <= 0) {
                this.scene.start('GameoverScene', { finalScore: this.score });
            }
        }
    }

    updateTimer() {
        this.timer++;
        this.txtTimer.setText('Tiempo: ' + this.timer);
    }

    updateStreak() {
        if(this.streak >= 5) {
            this.streakMultiplier = 4;
        } else if (this.streak >= 3) {
            this.streakMultiplier = 2;
        } else {
            this.streakMultiplier = 1;
        }
        this.txtStreak.setText("Racha: " + this.streak + " x" + this.streakMultiplier);
    }

    updateScore() {
        this.score += 10 * this.streakMultiplier;
        this.txtScore.setText("Puntaje: " + this.score);
    }

    updateLives() {
        this.lives -= 1;
        if(this.lives == 2) {
            this.txtLives.setText('Vidas: <3 <3');
        } else {
            this.txtLives.setText('Vidas: <3');
        }
    }
}


export default GameScene;