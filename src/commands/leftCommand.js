export class LeftCommand{
    constructor(logger, direction){
        this.logger = logger;
        this.direction = direction;
    }

    execute(currentRobot) {
        return this.direction.getNextLeftDirection(currentRobot.F);
    }
}