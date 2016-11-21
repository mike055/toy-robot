export class RightCommand{
    constructor(logger, direction){
        this.logger = logger;
        this.direction = direction;
    }

    execute(currentRobot) {
        return this.direction.getNextRightDirection(currentRobot.F);
    }
}