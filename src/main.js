import PreloadScene from "./states/Preload";
import MenuScene from "./states/Menu"
import GameScene from "./states/Game";
import GameoverScene from "./states/Gameover"

let config = {
    /*width: window.innerWidth 100%,
    height: window.innerHeight,*/
    width: 800 ,
    height: 600,
    scene: [PreloadScene, MenuScene, GameScene, GameoverScene],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default : 'arcade',
        arcade:{
            //debug:true,
            gravity:{
                y : 0
            }
        }
    }
};
new Phaser.Game(config);