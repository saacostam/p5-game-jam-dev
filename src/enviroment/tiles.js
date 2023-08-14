const useTilesFactory = (x, y, width, height, type) => {
    const tile = new tiles.Sprite();

    tile.color = 'black';
    tile.collider = 'static';

    if (type === 'c1'){
        tile.color = GAME_CONFIG.FIXED_COLOR_1;
    }else if(type === 'c2'){
        tile.color = GAME_CONFIG.FIXED_COLOR_2;
    }

    tile.x = x;
    tile.y = y;

    tile.w = width;
    tile.h = height;

    tile.type = type;

    return tile;
}

useBackgroundTilesFactor = (x, y, width, height, type) => {
    tile = new Sprite();
    backgroundTiles.push(tile);

    tile.color = 'black';
    tile.collider = 'none';

    tile.x = x;
    tile.y = y;

    tile.w = width;
    tile.h = height;

    tile.type = type;

    if (type === 'bg-1'){
        tile.collider = 'none';
        tile.color = GAME_CONFIG.COLOR_1;
    }else if (type === 'bg-2'){
        tile.collider = 'none';
        tile.color = GAME_CONFIG.COLOR_2;
    }else if (type === 'bg-3'){
        tile.collider = 'none';
        tile.color = GAME_CONFIG.COLOR_3;
    }

    tile.updateStyle = (tile) => {
        if (tile.type === 'bg-1'){
            tile.color = GAME_CONFIG.COLOR_1;
        }else if (tile.type === 'bg-2'){
            tile.color = GAME_CONFIG.COLOR_2;
        }
    }

    return tile;
}

useBorderFactory = () => {
    const BORDER_DEF = [
        {
            x: -UNIT_WIDTH,
            y: -UNIT_HEIGHT/2 + height/2,
            width: UNIT_WIDTH,
            height: height + UNIT_HEIGHT * 2,
            type: 'border',
        },
        {
            x: width,
            y: -UNIT_HEIGHT/2 + height/2,
            width: UNIT_WIDTH,
            height: height + UNIT_HEIGHT * 2,
            type: 'target',
        },
        {
            x: -UNIT_WIDTH/2 + width/2,
            y: -UNIT_HEIGHT,
            width: width + UNIT_WIDTH * 2,
            height: UNIT_HEIGHT,
            type: 'border',
        },
        {
            x: -UNIT_WIDTH/2 + width/2,
            y: height,
            width: width + UNIT_WIDTH * 2,
            height: UNIT_HEIGHT,
            type: 'border',
        },
    ]

    for (let i = 0; i < BORDER_DEF.length; i++){
        const {x, y, width, height, type} = BORDER_DEF[i];
        if (type === 'border'){
            useTilesFactory(x, y, width, height, 'border');
        }else if (type === 'target'){
            useTargetFactory(x, y, width, height);
        }

    }
}