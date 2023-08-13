let player1, player2;
let tiles;
let backgroundTiles = [];
let LEVEL = 0;

function canvasConfig(){
    createCanvas(WIDTH, HEIGHT);
}

function setup(){
    canvasConfig();
    tiles = new Group();
    createLevel(LEVEL);
}

function draw(){
    noStroke()
    strokeWeight(0);
    background(GAME_CONFIG.COLOR_1);

    fill('white');
    text(frameRate(), 20, 20);

    if (mouse.pressing()) {
        camera.zoom = 0.7;
    } else {
        camera.zoom = 1;
    }

    if (keyboard.pressed('E')){
        switchColors();
    }
}

const switchColors = () => {
    const TEMP = GAME_CONFIG.COLOR_1;
    GAME_CONFIG.COLOR_1 = GAME_CONFIG.COLOR_2;
    GAME_CONFIG.COLOR_2 = TEMP;

    backgroundTiles.forEach(TILE => TILE.updateStyle(TILE));
}