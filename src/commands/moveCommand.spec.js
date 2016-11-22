import {MoveCommand} from './moveCommand';
import '../../tests/polyfills.js'

describe('MoveCommand', () => {

    describe('when executing command', () => {

        var mockTable = {
            isRobotOnTable: function(robot){}
        }

        var moveCommand;
        beforeEach(function() {
            moveCommand = new MoveCommand(mockTable);
        });

        it('it returns null when current robot is not on board', function(){
            const robot = {
                X: 0,
                Y: 0,
                F: 'SOUTH'
            };
            
            spyOn(mockTable, 'isRobotOnTable').and.returnValue(false);

            let result = moveCommand.execute(robot);

            expect(result).toBe(null);
        });

        describe('when facing SOUTH', () => {
            it('it returns a new robot moved down one on the Y axis', function(){
                const robot = {
                    X: 0,
                    Y: 1,
                    F: 'SOUTH'
                };
                
                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);

                let result = moveCommand.execute(robot);

                expect(result).not.toBe(robot);
                expect(result.Y).toBe(robot.Y - 1);
                expect(result.X).toBe(robot.X);
                expect(result.F).toBe(robot.F);
            });
        });

        describe('when facing NORTH', () => {
            it('it returns a new robot moved up one on the Y axis', function(){
                const robot = {
                    X: 0,
                    Y: 1,
                    F: 'NORTH'
                };
                
                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);

                let result = moveCommand.execute(robot);

                expect(result).not.toBe(robot);
                expect(result.Y).toBe(robot.Y + 1);
                expect(result.X).toBe(robot.X);
                expect(result.F).toBe(robot.F);
            });
        });

        describe('when facing WEST', () => {
            it('it returns a new robot moved down one on the X axis', function(){
                const robot = {
                    X: 1,
                    Y: 0,
                    F: 'WEST'
                };
                
                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);

                let result = moveCommand.execute(robot);

                expect(result).not.toBe(robot);
                expect(result.X).toBe(robot.X - 1);
                expect(result.Y).toBe(robot.Y);
                expect(result.F).toBe(robot.F);
            });
        });

        describe('when facing EAST', () => {
            it('it returns a new robot moved up one on the X axis', function(){
                const robot = {
                    X: 1,
                    Y: 0,
                    F: 'EAST'
                };
                
                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);

                let result = moveCommand.execute(robot);

                expect(result).not.toBe(robot);
                expect(result.X).toBe(robot.X + 1);
                expect(result.Y).toBe(robot.Y);
                expect(result.F).toBe(robot.F);
            });
        });
    });
});