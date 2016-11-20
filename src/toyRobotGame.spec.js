import {ToyRobotGame} from './toyRobotGame';
import {Board} from './board';
import {CommandProvider} from './commandProvider';

import '../tests/pollyfills.js'

describe('ToyRobotGame', () => {

    var mockLogger = {
        log: function(message){}
    }

    var mockBoard = {

    }

    var mockCommandProvider = {
        for: function(rawCommand) { }
    }

    describe('move', () => {

        it('returns and logs when no command found', function(){

            let toyRobotGame = new ToyRobotGame(mockLogger, mockBoard, mockCommandProvider);

            spyOn(mockLogger, 'log');
            spyOn(mockCommandProvider, 'for').and.returnValue(undefined);

            toyRobotGame.move('a command');

            expect(mockLogger.log).toHaveBeenCalled();
        })


    });
});