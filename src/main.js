import PreloadScene from "./states/Preload";
import MenuScene from "./states/Menu"
import GameScene from "./states/Game";

let config = {
    /*width: window.innerWidth 100%,
    height: window.innerHeight,*/
    width: 800 ,
    height: 600,
    scene: [PreloadScene, MenuScene, GameScene],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default : 'arcade',
        arcade:{
            //debug:true,
            gravity:{
                y : 200
            }
        }
    }
};
new Phaser.Game(config);