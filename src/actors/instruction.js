const useInstructionFactory = (textToWrite) => {
    const instruction = new Sprite();

    instruction.x = WIDTH/2;
    instruction.y = UNIT_HEIGHT/2;
    instruction.width = WIDTH/2;
    instruction.height = UNIT_HEIGHT;

    instruction.collider = 'none';

    instruction.draw = () => {
        fill('rgba(0,0,0,0.5)');
        rect(0, 0, instruction.width, instruction.height, UNIT_HEIGHT/4);

        textAlign(CENTER, CENTER);
        fill('rgba(255, 255, 255, 1)');
        textSize(UNIT_HEIGHT/2);
        text(textToWrite, 0, -UNIT_HEIGHT/16);
    }

    return instruction;
}
