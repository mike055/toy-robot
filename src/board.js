export class Board{
    constructor(logger){
        const boardSize = 5;
        this.logger = logger;
        this.board = Array(...Array(boardSize)).map(() => Array(boardSize));
    }

    isRobotInValidPositionForBoard(toyRobot) {

        if(Number.isInteger(toyRobot.X) && Number.isInteger(toyRobot.Y)) {
            return (toyRobot.X >= 0 && toyRobot.X < this.board.length) && (toyRobot.Y >= 0 && toyRobot.Y < this.board[toyRobot.X].length);
        }

        return false;
    }
}

