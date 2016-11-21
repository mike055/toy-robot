import {RightCommand} from './rightCommand';
import '../../tests/pollyfills.js'

describe('RightCommand', () => {

    describe('when executing command', () => {

        var mockLogger = {
            log: function(message){}
        }

        var mockDirection = {
            getNextRightDirection: function(currentDirection) { }
        };

        it('return robot facing next direction', function(){
            const currentDir = 'NORTH';
            const nextDir = 'EAST';

            spyOn(mockDirection, 'getNextRightDirection').and.returnValue(nextDir);
            
            let rightCommand = new RightCommand(mockLogger, mockDirection);
            let result = rightCommand.execute({
                X: 0,
                Y: 0,
                F: currentDir
            });

            expect(result).toBe(nextDir);
            expect(mockDirection.getNextRightDirection).toHaveBeenCalledWith(currentDir);
        });
    });
});