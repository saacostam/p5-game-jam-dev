const ___buildLevel = (index) => {
    if (index >= GAME_LEVELS.length) throw new Error('Trying to access a undefined level. Please check the index of the level provided!');
    const LEVEL = GAME_LEVELS[index];

    // Background
    for (let i = 0; i < LEVEL.self.length; i++){
        const ROW = LEVEL.self[i];
        for (let j = 0; j < LEVEL.self[i].length; j++){
            const TILE = ROW[j];
            const X = UNIT_WIDTH * j;
            const Y = UNIT_HEIGHT * i;

            switch (TILE) {
                case '.':
                    useBackgroundTilesFactor(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'bg-1');
                    break;
                case ',':
                    useBackgroundTilesFactor(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'bg-2');
                    break;
                case 'B':
                    useBackgroundTilesFactor(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'bg-1');
                    break;
                case 'X':
                    useBackgroundTilesFactor(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'bg-2');
                    break;
            }
        }
    }

    if (LEVEL.instruction) useInstructionFactory(LEVEL.instruction);

    // Tiles
    for (let i = 0; i < LEVEL.self.length; i++){
        const ROW = LEVEL.self[i];
        for (let j = 0; j < LEVEL.self[i].length; j++){
            const TILE = ROW[j];
            const X = UNIT_WIDTH * j;
            const Y = UNIT_HEIGHT * i;

            switch (TILE) {
                case 'M':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'div');
                    break;
                case 'N':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'border');
                    break;
                case 'X':
                    useSpikeFactory(X, Y, false);
                    break;
                case 'B':
                    useSpikeFactory(X, Y, true);
                    break;
                case 'A':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'c1');
                    break;
                case 'Z':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'c2');
                    break;
            }
        }
    }

    useBorderFactory();

    const {x: _p1x, y: _p1y} = LEVEL.start.player1;
    const {x: _p2x, y: _p2y} = LEVEL.start.player2;
    p1x = _p1x;
    p1y = _p1y;
    p2x = _p2x;
    p2y = _p2y;

    player1 = usePlayerFactory(p1x, p1y, true);
    player2 = usePlayerFactory(p2x, p2y, false);
}

const restartLevel = () => {
    allSprites.forEach( SPRITE => SPRITE.life = 0);
    backgroundTiles.forEach( SPRITE => SPRITE.life = 0);
    tiles.forEach( SPRITE => SPRITE.life = 0);
    deadly.forEach( SPRITE => SPRITE.life = 0);
    target.forEach( SPRITE => SPRITE.life = 0);

    if (GAME_CONFIG.COLOR_1 !== GAME_CONFIG.FIXED_COLOR_1) switchColors();
}

const createLevel = (index) => {
    restartLevel();

    if (index === -1 ) buildMenu();
    else if (index === -2) buildControls();
    else ___buildLevel(index);

    camera.x = WIDTH/2 - UNIT_WIDTH/2;
    camera.y = HEIGHT/2 - UNIT_HEIGHT/2;
};

const buildMenu = () => {
    onClickStart = () => {
        LEVEL = 0;
        restartLevel();
        createLevel(LEVEL);
    }

    onClickControl = () => {
        LEVEL = -2;
        restartLevel();
        createLevel(LEVEL);
    }

    useBackgroundTilesFactor(0, 0, WIDTH*2, HEIGHT*2, 'bg-3');

    const image = new Sprite(WIDTH/2, HEIGHT*2/6, WIDTH/2, HEIGHT/2);
    image.collider = 'none';
    image.addAni(title);

    useButtonFactory(WIDTH/2, HEIGHT/2 + (UNIT_HEIGHT*1.5), WIDTH/6, UNIT_HEIGHT, onClickStart, 'START');
    useButtonFactory(WIDTH/2, HEIGHT/2 + (UNIT_HEIGHT*4.5/2), WIDTH/6, UNIT_HEIGHT, onClickControl, 'CONTROLS');

    player1 = {}; player2 = {};
    player1.life = 1;
    player2.life = 1;
}

const buildControls = () => {
    onClickBlack = () => {
        LEVEL = -1;
        restartLevel();
        createLevel(LEVEL);
    }

    useBackgroundTilesFactor(0, 0, WIDTH*2, HEIGHT*2, 'bg-3');

    const image = new Sprite(WIDTH/2, HEIGHT/2 - UNIT_HEIGHT*0.5, WIDTH/2, HEIGHT/2);
    image.collider = 'none';
    image.addAni(controls);

    useButtonFactory(UNIT_WIDTH*2.5, UNIT_HEIGHT*0.5, WIDTH/6, UNIT_HEIGHT, onClickBlack, 'BACK');

    player1 = {}; player2 = {};
    player1.life = 1;
    player2.life = 1;
}
