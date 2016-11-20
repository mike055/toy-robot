export class RightCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute() {
        this.logger.log(`right command`);
    }
}