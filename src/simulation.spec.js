import {Simulation} from './simulation';
import {Table} from './table';
import {CommandProvider} from './commandProvider';

import '../tests/pollyfills.js'

describe('Simulation', () => {

    var mockLogger = {
        log: function(message){}
    }

    var mockTable = {

    }

    var mockCommandProvider = {
        for: function(rawCommand) { }
    }

    describe('when move is called', () => {

        it('returns and logs when no command found', function(){

            let toyRobotGame = new Simulation(mockLogger, mockTable, mockCommandProvider);

            spyOn(mockLogger, 'log');
            spyOn(mockCommandProvider, 'for').and.returnValue(undefined);

            toyRobotGame.move('a command');

            expect(mockLogger.log).toHaveBeenCalled();
        })


    });
});