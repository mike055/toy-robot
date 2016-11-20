export class PlaceCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute() {
        this.logger.log(`place command`);
    }
}