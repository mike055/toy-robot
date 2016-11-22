import {Simulation} from './simulation';
import {Table} from './table';
import {CommandProvider} from './commandProvider';

import '../tests/pollyfills.js'

describe('Simulation', () => {

    var mockTable = {}

    var mockCommandProvider = {
        for: function(rawCommand) { }
    }

    var mockCommand = {
        execute: function(currentRobot){}
    }

    var simulation;
    beforeEach(function() {
        simulation = new Simulation(mockTable, mockCommandProvider);
    });

    describe('when move is called', () => {

        it('returns and robot state unchanged', function(){
            const currentRobot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };

            spyOn(mockCommandProvider, 'for').and.returnValue(undefined);

            simulation.currentRobotState = currentRobot;
            
            simulation.move('a command');

            expect(simulation.currentRobotState).toBe(currentRobot);
        })

        it('set new robot state when command executed', function(){
            const currentRobot = {
                X: 0,
                Y: 0,
                F: 'NORTH'
            };
            const newRobotState = {
                X: 4,
                Y: 4,
                F: 'SOUTH'
            }

            const rawCommand = 'PLACE 4,4,SOUTH';

            spyOn(mockCommand, 'execute').and.returnValue(newRobotState);
            spyOn(mockCommandProvider, 'for').and.returnValue(mockCommand);

            simulation.currentRobotState = currentRobot;

            simulation.move(rawCommand);

            expect(mockCommandProvider.for).toHaveBeenCalledWith(rawCommand);
            expect(mockCommand.execute).toHaveBeenCalledWith(currentRobot);
            expect(simulation.currentRobotState).toBe(newRobotState);
        })

    });
});