import {LeftCommand} from './leftCommand';
import '../../tests/pollyfills.js'

describe('LeftCommand', () => {

    describe('when executing command', () => {

        var mockLogger = {
            log: function(message){}
        }

        var mockDirection = {
            getNextLeftDirection: function(currentDirection) { }
        };

        it('return robot facing next direction', function(){
            const currentDir = 'NORTH';
            const nextDir = 'WEST';

            spyOn(mockDirection, 'getNextLeftDirection').and.returnValue(nextDir);
            
            let leftCommand = new LeftCommand(mockLogger, mockDirection);
            let result = leftCommand.execute({
                X: 0,
                Y: 0,
                F: currentDir
            });

            expect(result).toBe(nextDir);
            expect(mockDirection.getNextLeftDirection).toHaveBeenCalledWith(currentDir);
        });
    });
});