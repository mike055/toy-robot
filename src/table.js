export class Table{
    constructor(){
        this.tableTop = Array(...Array(5)).map(() => Array(5));
    }

    isRobotOnTable(robot) {

        if(Number.isInteger(robot.X) && Number.isInteger(robot.Y)) {
            return (robot.X >= 0 && robot.X < this.tableTop.length) && (robot.Y >= 0 && robot.Y < this.tableTop[robot.X].length);
        }

        return false;
    }
}

