const useSpikeFactory = (x, y, looksUp) => {
    const spike = new deadly.Sprite();

    spike.color = 'darkred';

    spike.y = y;
    spike.x = x;

    spike.height = UNIT_HEIGHT;
    spike.width = UNIT_WIDTH;

    spike.collider = 'static';

    return spike;
}
