import {Table} from './table';
import {CommandProvider} from './commandProvider';

export class Simulation{
    constructor(table, commandProvider){
        this.table = table;
        this.commandProvider = commandProvider;

        this.currentRobotState = {
            X: null,
            Y: null,
            F: null
        }
    }

    move(rawCommand) {
        let command = this.commandProvider.for(rawCommand);

        if(!command) {
            return;
        }

        this.currentRobotState = command.execute(this.currentRobotState);
    }
}