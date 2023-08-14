let player1, player2;
let tiles, deadly, target;
let backgroundTiles = [];
let LEVEL = -1;

let idleAnimation, blackIdleAnimation, spikeSprite, runningRightAnimation, blackRunningRightAnimation;

function preload(){
    idleAnimation = loadAnimation(
        './idle-1.png',
        './idle-2.png',
    )

    blackIdleAnimation = loadAnimation(
        './idle-1-inv.png',
        './idle-2-inv.png',
    )

    spikeSprite = loadAnimation(
        './puas.png',
    )

    runningRightAnimation = loadAnimation(
        './run-1.png',
        './run-2.png',
        './run-3.png',
        './run-4.png',
        './run-5.png',
        './run-6.png',
    )

    blackRunningRightAnimation = loadAnimation(
        './run-1-inv.png',
        './run-2-inv.png',
        './run-3-inv.png',
        './run-4-inv.png',
        './run-5-inv.png',
        './run-6-inv.png',
    )
}

function canvasConfig(){
    createCanvas(WIDTH, HEIGHT);
    document.querySelector('canvas').style = 'width: 100%';
    allSprites.pixelPerfect = true;
}

function setup(){
    canvasConfig();
    tiles = new Group();
    deadly = new Group();
    target = new Group();
    createLevel(LEVEL);
}

function draw(){
    noStroke()
    strokeWeight(0);
    background(GAME_CONFIG.COLOR_1);

    if (keyboard.pressing('V')) {
        fill('white');
        text(frameRate(), 20, 20);

        camera.zoom = 0.7;
    } else {
        camera.zoom = 1;
    }

    if (keyboard.pressed('E')) switchColors();

    if (player1.life === 0 || player2.life === 0) createLevel(LEVEL);

    if (player1.finish && player2.finish){
        LEVEL += 1;
        createLevel(LEVEL);
    }
}

const switchColors = () => {
    const TEMP = GAME_CONFIG.COLOR_1;
    GAME_CONFIG.COLOR_1 = GAME_CONFIG.COLOR_2;
    GAME_CONFIG.COLOR_2 = TEMP;

    backgroundTiles.forEach(TILE => TILE.updateStyle(TILE));
}