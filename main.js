let player1, player2;
let tiles, deadly, target;
let backgroundTiles = [];
let LEVEL = -1;

let futura, title, controls;
let death, jump, music, click, dimension;

let idleAnimation, blackIdleAnimation, spikeSprite, runningRightAnimation, blackRunningRightAnimation;

function preload(){
    idleAnimation = loadAnimation(
        './public/idle-1.png',
        './public/idle-2.png',
    )

    blackIdleAnimation = loadAnimation(
        './public/idle-1-inv.png',
        './public/idle-2-inv.png',
    )

    spikeSprite = loadAnimation(
        './public/puas.png',
    )

    runningRightAnimation = loadAnimation(
        './public/run-1.png',
        './public/run-2.png',
        './public/run-3.png',
        './public/run-4.png',
        './public/run-5.png',
        './public/run-6.png',
    )

    blackRunningRightAnimation = loadAnimation(
        './public/run-1-inv.png',
        './public/run-2-inv.png',
        './public/run-3-inv.png',
        './public/run-4-inv.png',
        './public/run-5-inv.png',
        './public/run-6-inv.png',
    )

    title = loadAnimation('./public/title.png');
    controls = loadAnimation('./public/controls.png');

    futura = loadFont('./public/futura.otf');

    death = loadSound('./public/death.mp3');
    jump = loadSound('./public/jump.mp3');
    music = loadSound('./public/music.mp3');
    click = loadSound('./public/click.mp3');
    dimension = loadSound('./public/dimension.mp3');
}

function canvasConfig(){
    createCanvas(WIDTH, HEIGHT);
    document.querySelector('canvas').style = 'width: 100%';
    allSprites.pixelPerfect = true;
    textFont(futura);
}

function setup(){
    canvasConfig();
    tiles = new Group();
    deadly = new Group();
    target = new Group();
    createLevel(LEVEL);

    music.loop();
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

    if (keyboard.pressed('E')) {
        switchColors();
        dimension.play();
    }

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
