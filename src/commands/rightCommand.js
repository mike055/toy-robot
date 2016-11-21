export class RightCommand{
    constructor(direction){
        this.direction = direction;
    }

    execute(currentRobot) {
        var newDirection = this.direction.getNextRightDirection(currentRobot.F);

        return {
            X: currentRobot.X,
            Y: currentRobot.Y,
            F: newDirection
        }
    }
}