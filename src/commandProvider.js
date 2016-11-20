import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';

export class CommandProvider {
    constructor(logger){
        this.logger = logger;
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
            return new PlaceCommand(this.logger);
        }

        return undefined;
    }
}