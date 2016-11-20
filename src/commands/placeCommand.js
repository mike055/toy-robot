export class PlaceCommand{
    constructor(logger, table, commandArgs){
        this.logger = logger;
        this.table = table;
        this.commandArgs = commandArgs;
    }

    execute() {
        this.logger.log(`place command`);

        if(this._areCommandArgsValid()) {
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
        const validDirections = ['NORTH','SOUTH','EAST','WEST'];

        if(this.commandArgs.length === 3) {
            if(Number.isInteger(this.commandArgs[0])
                && Number.isInteger(this.commandArgs[1])
                && validDirections.indexOf(this.commandArgs[2]) > -1)
            {
                return true;
            }
        }
        
        return false;
    }
}