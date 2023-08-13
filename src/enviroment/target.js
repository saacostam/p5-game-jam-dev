const useTargetFactory = (x, y, width, height) => {
    const newTarget = new target.Sprite();

    newTarget.y = y;
    newTarget.x = x;
    newTarget.height = height;
    newTarget.width = width;

    newTarget.color = 'green';
    newTarget.collider = 'static';

    return newTarget;
}
