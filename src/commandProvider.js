import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';
import {Table} from './table';
import {Direction} from './direction';
import {Reporter} from './reporter';

export class CommandProvider {
    constructor(reporter, table, direction){
        this.reporter = reporter;
        this.table = table;
        this.direction = direction;
    }

    getCommandFor(rawCommand) {

        if(!rawCommand) {
            return undefined;
        }        

        rawCommand = rawCommand.trim();

        if(rawCommand === 'LEFT') {
            return new LeftCommand(this.direction);
        }
        if(rawCommand === 'RIGHT') {
            return new RightCommand(this.direction);
        }
        if(rawCommand === 'MOVE') {
            return new MoveCommand(this.table);
        }
        if(rawCommand === 'REPORT') {
            return new ReportCommand(this.reporter);
        }
        if(rawCommand.startsWith('PLACE')) {
            var args = rawCommand.replace('PLACE', '').trim().split(',');

            return new PlaceCommand(this.table, this.direction, args);
        }

        return undefined;
    }
}