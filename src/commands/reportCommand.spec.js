import {ReportCommand} from './reportCommand';
import '../../tests/pollyfills.js'

describe('ReportCommand', () => {

    describe('when executing command', () => {

        var mockLogger = {
            log: function(message){}
        }

        it('it logs current robot location', function(){
            const robot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };
            
            spyOn(mockLogger, 'log').and.callThrough();
            
            let reportCommand = new ReportCommand(mockLogger);
            let result = reportCommand.execute(robot);

            expect(mockLogger.log).toHaveBeenCalledWith(`${robot.X},${robot.Y},${robot.F}`);
        });

        it('returns the current robot', function(){
            const robot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };
            
            let reportCommand = new ReportCommand(mockLogger);
            let result = reportCommand.execute(robot);

            expect(result).toBe(robot);
        });
    });
});