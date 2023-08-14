const useButtonFactory = (x, y, width, height, callback) => {
    const button = new Sprite();

    button.x = x;
    button.y = y;
    button.width = width;
    button.height = height;

    button.update = () => {
        if (button.mouse.hovering() && mouse.pressed()) callback();
    }

    return button;
}
