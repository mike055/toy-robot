export class LeftCommand{
    constructor(direction){
        this.direction = direction;
    }

    execute(currentRobot) {
        var newDirection = this.direction.getNextLeftDirection(currentRobot.F);

        return {
            X: currentRobot.X,
            Y: currentRobot.Y,
            F: newDirection
        }
    }
}