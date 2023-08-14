const useButtonFactory = (x, y, width, height, callback, textToWrite) => {
    const button = new Sprite();

    button.x = x;
    button.y = y;
    button.width = width;
    button.height = height;
    button.hover = false;

    button.update = () => {
        if (button.mouse.hovering()){
            button.hover = true;
            if (mouse.pressed()) {
                callback();
                click.play();
            }
        }else{
            button.hover = false;
        }
    }

    button.draw = () => {
        fill(`rgba(237,237,237,${button.hover ? 0.9 : 0})`);
        rect(0, 0, button.width, button.height, button.height/4);

        textAlign(CENTER, CENTER);
        fill(button.hover ? GAME_CONFIG.COLOR_3 : GAME_CONFIG.FIXED_COLOR_2);
        textSize(button.height*0.8);
        text(textToWrite, 0, -button.height/12);
    }

    return button;
}
