export class ReportCommand{
    constructor(logger){
        this.logger = logger;
    }

    execute() {
        this.logger.log(`report command`);
    }
}