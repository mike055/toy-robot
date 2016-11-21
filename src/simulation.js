import {Table} from './table';
import {CommandProvider} from './commandProvider';

export class Simulation{
    constructor(logger, table, commandProvider){
        this.logger = logger;
        this.table = table;
        this.commandProvider = commandProvider;

        this.currentRobotState = {
            X: null,
            Y: null,
            F: null
        }
    }

    move(rawCommand) {
        this.logger.log(`Received: ${rawCommand}`);

        let command = this.commandProvider.for(rawCommand);

        if(!command) {
            this.logger.log('Invalid command');
            return;
        }

        this.currentRobotState = command.execute(this.currentRobotState);
    }
}