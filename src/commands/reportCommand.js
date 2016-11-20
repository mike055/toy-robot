export class ReportCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute(robot) {
        this.logger.log(`${robot.X},${robot.Y},${robot.F}`);
        return robot;
    }
}