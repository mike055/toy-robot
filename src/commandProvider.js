import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';
import {Table} from './table';
import {Direction} from './direction';

export class CommandProvider {
    constructor(logger, table, direction){
        this.logger = logger;
        this.table = table;
        this.direction = direction;
    }

    for(rawCommand) {

        if(!rawCommand) {
            return undefined;
        }        

        rawCommand = rawCommand.trim();

        if(rawCommand === 'LEFT') {
            return new LeftCommand(this.logger, this.direction);
        }
        if(rawCommand === 'RIGHT') {
            return new RightCommand(this.logger, this.direction);
        }
        if(rawCommand === 'MOVE') {
            return new MoveCommand(this.logger, this.table);
        }
        if(rawCommand === 'REPORT') {
            return new ReportCommand(this.logger);
        }
        if(rawCommand.startsWith('PLACE')) {
            var args = rawCommand.replace('PLACE', '').trim().split(',');

            return new PlaceCommand(this.logger, this.table, this.direction, args);
        }

        return undefined;
    }
}