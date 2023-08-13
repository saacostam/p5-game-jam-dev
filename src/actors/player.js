const usePlayerFactory = (x, y, hasNormalGravity) => {
    const player = new Sprite();
    let canJump = false;

    player.y = y;
    player.x = x;

    player.height = UNIT_HEIGHT;
    player.width = UNIT_WIDTH;
    player.rotationLock = true;
    player.friction = 0;
    player.bounciness = 0;

    player.color = hasNormalGravity ? 'purple' : 'green';
    player.finish = false;

    const GRAVITY_MODIFIER = ( hasNormalGravity ? 1: -1);

    player.update = () => {
        const DELTA_X = UNIT_WIDTH/128 * deltaTime;
        const JUMP_DELTA_Y = UNIT_HEIGHT/4;
        const COLLIDING_TILES = player.colliding(tiles) && Math.abs(player.velocity.y) < 0.1;
        player.finish = player.colliding(target);

        if (player.colliding(deadly)) player.life = 0;

        player.velocity.y += PHYSICS_CONST.gravity * GRAVITY_MODIFIER * deltaTime;

        if (kb.pressing('right')){
            player.velocity.x = DELTA_X;
        }else if(kb.pressing('left')){
            player.velocity.x = -DELTA_X;
        } else if (kb.pressing('up')){
            player.velocity.x = DELTA_X  * GRAVITY_MODIFIER;
        }else if(kb.pressing('down')){
            player.velocity.x = -DELTA_X * GRAVITY_MODIFIER;
        }

        player.velocity.x -= player.velocity.x*0.15;

        if (COLLIDING_TILES) canJump = true;

        if (kb.presses('space') && canJump){
            player.velocity.y += -JUMP_DELTA_Y * GRAVITY_MODIFIER;
            player.pos.y += -10      * GRAVITY_MODIFIER;
            canJump = false;
        }

        if (kb.pressed('r')) player.life = 0;
    }

    return player;
}