import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';
import {Table} from './table';

export class CommandProvider {
    constructor(logger, table){
        this.logger = logger;
        this.table = table;
    }

    for(rawCommand) {

        if(!rawCommand) {
            return undefined;
        }        

        rawCommand = rawCommand.trim();

        if(rawCommand === 'LEFT') {
            return new LeftCommand(this.logger);
        }
        if(rawCommand === 'RIGHT') {
            return new RightCommand(this.logger);
        }
        if(rawCommand === 'MOVE') {
            return new MoveCommand(this.logger);
        }
        if(rawCommand === 'REPORT') {
            return new ReportCommand(this.logger);
        }
        if(rawCommand.startsWith('PLACE')) {
            var args = rawCommand.replace('PLACE', '').trim().split(',');

            return new PlaceCommand(this.logger, this.table, args);
        }

        return undefined;
    }
}