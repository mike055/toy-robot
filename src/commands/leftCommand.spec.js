import {LeftCommand} from './leftCommand';
import '../../tests/polyfills.js'

describe('LeftCommand', () => {

    describe('when executing command', () => {

        var mockDirection = {
            getNextLeftDirection: function(currentDirection) { }
        };

        it('return robot facing next direction', function(){
            const currentDir = 'NORTH';
            const nextDir = 'WEST';

            const currentRobot = {
                X: 0,
                Y: 0,
                F: currentDir
            };

            spyOn(mockDirection, 'getNextLeftDirection').and.returnValue(nextDir);
            
            let leftCommand = new LeftCommand(mockDirection);
            let result = leftCommand.execute(currentRobot);

            expect(result.F).toBe(nextDir);
            expect(result.X).toBe(currentRobot.X);
            expect(result.Y).toBe(currentRobot.Y);
            
            expect(mockDirection.getNextLeftDirection).toHaveBeenCalledWith(currentDir);
        });
    });
});