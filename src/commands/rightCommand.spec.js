import {RightCommand} from './rightCommand';
import '../../tests/pollyfills.js'

describe('RightCommand', () => {

    describe('when executing command', () => {

        var mockDirection = {
            getNextRightDirection: function(currentDirection) { }
        };

        it('return robot facing next direction', function(){
            const currentDir = 'NORTH';
            const nextDir = 'EAST';

            const currentRobot = {
                X: 0,
                Y: 0,
                F: currentDir
            };

            spyOn(mockDirection, 'getNextRightDirection').and.returnValue(nextDir);
            
            let rightCommand = new RightCommand(mockDirection);
            let result = rightCommand.execute(currentRobot);

            expect(result.F).toBe(nextDir);
            expect(result.X).toBe(currentRobot.X);
            expect(result.Y).toBe(currentRobot.Y);
            
            expect(mockDirection.getNextRightDirection).toHaveBeenCalledWith(currentDir);
        });
    });
});