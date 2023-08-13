let player1, player2;
let tiles, deadly, target;
let backgroundTiles = [];
let LEVEL = 0;

function canvasConfig(){
    createCanvas(WIDTH, HEIGHT);
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

    fill('white');
    text(frameRate(), 20, 20);

    if (mouse.pressing()) {
        camera.zoom = 0.7;
    } else {
        camera.zoom = 1;
    }

    if (keyboard.pressed('E')) switchColors();

    if (player1.life === 0 || player2.life === 0){
        createLevel(LEVEL);
    }

    if (player1.finish && player2.finish){
        LEVEL += 0;
        createLevel(LEVEL);
    }
}

const switchColors = () => {
    const TEMP = GAME_CONFIG.COLOR_1;
    GAME_CONFIG.COLOR_1 = GAME_CONFIG.COLOR_2;
    GAME_CONFIG.COLOR_2 = TEMP;

    backgroundTiles.forEach(TILE => TILE.updateStyle(TILE));
}