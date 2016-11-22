import {ReportCommand} from './reportCommand';
import '../../tests/polyfills.js'

describe('ReportCommand', () => {

    describe('when executing command', () => {

        var mockReporter = {
            report: function(message){}
        }

        var reportCommand;
        beforeEach(function() {
            reportCommand = new ReportCommand(mockReporter);
        });

        it('it logs current robot location', function(){
            const robot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };
            
            spyOn(mockReporter, 'report').and.callThrough();
            
            let result = reportCommand.execute(robot);

            expect(mockReporter.report).toHaveBeenCalledWith(`${robot.X},${robot.Y},${robot.F}`);
        });

        it('returns the current robot', function(){
            const robot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };
            
            let result = reportCommand.execute(robot);

            expect(result).toBe(robot);
        });
    });
});