const ___buildLevel = (index) => {
    allSprites.forEach(SPRITE => SPRITE.life = 0);
    backgroundTiles.forEach(SPRITE => SPRITE.life = 0);

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
            }
        }
    }

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
                case 'B':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'border');
                    break;
                case '9':
                    useSpikeFactory(X, Y, false);
                    break;
                case '0':
                    useSpikeFactory(X, Y, true);
                    break;
                case '1':
                    useTilesFactory(X, Y, UNIT_WIDTH, UNIT_HEIGHT, 'c1');
                    break;
                case '2':
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

    camera.x = WIDTH/2 - UNIT_WIDTH/2;
    camera.y = HEIGHT/2 - UNIT_HEIGHT/2;
}

const createLevel = (index) => ___buildLevel(index);