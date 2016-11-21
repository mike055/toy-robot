export class MoveCommand{
    constructor(table){
        this.table = table;
    }

    execute(currentRobot) {
        var newRobot = this._makeMove(currentRobot);

        if(newRobot && this.table.isRobotOnTable(newRobot)) {
            return newRobot;
        }

        return null;
    }

    _makeMove(currentRobot){
        if(currentRobot.F === 'NORTH') {
            return {
                X: currentRobot.X,
                Y: currentRobot.Y + 1,
                F: currentRobot.F
            };
        }
        else if(currentRobot.F === 'SOUTH') {
            return {
                X: currentRobot.X,
                Y: currentRobot.Y - 1,
                F: currentRobot.F
            };
        }
        else if(currentRobot.F === 'EAST') {
             return {
                X: currentRobot.X + 1,
                Y: currentRobot.Y,
                F: currentRobot.F
            };
        }
        else if(currentRobot.F === 'WEST') {
             return {
                X: currentRobot.X - 1,
                Y: currentRobot.Y,
                F: currentRobot.F
            };
        }

        return undefined;
    }
}