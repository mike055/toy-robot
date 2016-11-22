import {Table} from './table';
import {CommandProvider} from './commandProvider';

export class Simulation{
    constructor(commandProvider){
        this.commandProvider = commandProvider;

        this.currentRobotState = undefined;
    }

    move(rawCommand) {
        const placeCommandName = 'PlaceCommand';
        let command = this.commandProvider.getCommandFor(rawCommand);

        if(!command) {
            return;
        }

        if(!this._isRobotPlaced() &&  command.constructor.name !== placeCommandName){
            return;
        }

        this.currentRobotState = command.execute(this.currentRobotState);
    }

    _isRobotPlaced() {
        return this.currentRobotState;
    }
}