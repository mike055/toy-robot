export class PlaceCommand{
    constructor(logger, table, direction, commandArgs){
        this.logger = logger;
        this.table = table;
        this.direction = direction;
        this.commandArgs = commandArgs;
    }

    execute() {
        
        if(!this._areCommandArgsValid()) {
            return null;
        }

        let robot = this._buildNewRobotCoOrds();

        if(this.table.isRobotOnTable(robot)) {
            return robot;
        }

        return null;
    }

    _buildNewRobotCoOrds(){
        return {
            X: Number.parseInt(this.commandArgs[0]),
            Y: Number.parseInt(this.commandArgs[1]),
            F: this.commandArgs[2]
        }
    }

    _areCommandArgsValid() {

        if(this.commandArgs.length === 3) {

            if(Number.isInteger(Number.parseInt(this.commandArgs[0]))
                && Number.isInteger(Number.parseInt(this.commandArgs[1]))
                && this.direction.isValidDirection(this.commandArgs[2]))
            {
                return true;
            }
        }
        
        return false;
    }
}