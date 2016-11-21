export class Direction {
    constructor(logger){
        this.logger = logger;

        this.validDirections = ['NORTH','EAST','SOUTH','WEST'];
    }

    getNextLeftDirection(currentDirection) {
        let currentIndex = this.validDirections.indexOf(currentDirection);
        let leftIndex = currentIndex - 1;

        if(leftIndex < 0) {
            leftIndex = this.validDirections.length - 1;
        }
        
        return this.validDirections[leftIndex];
    }

    getNextRightDirection(currentDirection) {
        let currentIndex = this.validDirections.indexOf(currentDirection);
        let rightIndex = currentIndex + 1;

        if(rightIndex === this.validDirections.length) {
            rightIndex = 0;
        }
        
        return this.validDirections[rightIndex];
    }
}