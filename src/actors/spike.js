const useSpikeFactory = (x, y, looksUp) => {
    const spike = new deadly.Sprite();

    spike.color = 'darkred';

    spike.y = y;
    spike.x = x;

    spike.height = UNIT_HEIGHT/5;
    spike.width = UNIT_WIDTH;

    spike.addAni('idle', spikeSprite);
    spike.changeAni('idle');

    spike.rotation = looksUp ? 0 : 180;

    spike.collider = 'static';

    return spike;
}
