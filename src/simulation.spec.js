import {Simulation} from './simulation';
import {Table} from './table';
import {CommandProvider} from './commandProvider';

import '../tests/polyfills.js'

describe('Simulation', () => {

    var mockCommandProvider = {
        getCommandFor: function(rawCommand) { }
    }

    var mockCommand = {
        execute: function(currentRobot){},
        constructor: { name : null }
    }

    var simulation;
    beforeEach(function() {
        simulation = new Simulation(mockCommandProvider);
    });

    describe('when move is called', () => {

        it('returns and robot state unchanged when undefined command', function(){
            const currentRobot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };

            spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(undefined);

            simulation.currentRobotState = currentRobot;
            
            simulation.move('a command');

            expect(simulation.currentRobotState).toBe(currentRobot);
        })

        describe('when robot is placed', () => {
            it('sets new robot state when command executed', function(){
                const currentRobot = {
                    X: 0,
                    Y: 0,
                    F: 'NORTH'
                };
                const newRobotState = {
                    X: 0,
                    Y: 1,
                    F: 'NORTH'
                }

                const rawCommand = 'MOVE';

                spyOn(mockCommand, 'execute').and.returnValue(newRobotState);
                spyOn(mockCommand.constructor, 'name').and.returnValue('MoveCommand');
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.currentRobotState = currentRobot;

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).toHaveBeenCalledWith(currentRobot);
                expect(simulation.currentRobotState).toBe(newRobotState);
            })
        });
        describe('when robot is not placed', () => {
            it('sets new robot state when place command executed', function(){
                const newRobotState = {
                    X: 4,
                    Y: 4,
                    F: 'South'
                }
                const rawCommand = 'PLACE 4,4,SOUTH';

                mockCommand.constructor.name = 'PlaceCommand';
                spyOn(mockCommand, 'execute').and.returnValue(newRobotState);
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).toHaveBeenCalledWith(undefined);
                expect(simulation.currentRobotState).toBe(newRobotState);
            });

            it('ignores the command when move command', function(){
                const rawCommand = 'MOVE';

                mockCommand.constructor.name = 'MoveCommand';
                spyOn(mockCommand, 'execute');
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).not.toHaveBeenCalled();
                expect(simulation.currentRobotState).toBe(undefined);
            });

            it('ignores the command when left command', function(){
                const rawCommand = 'LEFT';

                mockCommand.constructor.name = 'LeftCommand';
                spyOn(mockCommand, 'execute');
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).not.toHaveBeenCalled();
                expect(simulation.currentRobotState).toBe(undefined);
            });

            it('ignores the command when right command', function(){
                const rawCommand = 'RIGHT';

                mockCommand.constructor.name = 'RightCommand';
                spyOn(mockCommand, 'execute');
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).not.toHaveBeenCalled();
                expect(simulation.currentRobotState).toBe(undefined);
            });

            it('ignores the command when report command', function(){
                const rawCommand = 'REPORT';

                mockCommand.constructor.name = 'ReportCommand';
                spyOn(mockCommand, 'execute');
                spyOn(mockCommandProvider, 'getCommandFor').and.returnValue(mockCommand);

                simulation.move(rawCommand);

                expect(mockCommandProvider.getCommandFor).toHaveBeenCalledWith(rawCommand);
                expect(mockCommand.execute).not.toHaveBeenCalled();
                expect(simulation.currentRobotState).toBe(undefined);
            });
        });

    });
});