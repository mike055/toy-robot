export class MoveCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute() {
        this.logger.log(`move command`);
    }
}