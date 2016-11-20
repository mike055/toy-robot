export class LeftCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute() {
        this.logger.log(`left command`);
    }
}