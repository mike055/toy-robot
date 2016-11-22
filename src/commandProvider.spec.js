import {CommandProvider} from './commandProvider';
import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';

import '../tests/polyfills.js'

describe('CommandProvider', () => {

    var mockReporter = {
        report: function(message){}
    }
    var mockTable = {
    }
    var mockDirection = {}

    var commandParser;
    beforeEach(function() {
        commandParser = new CommandProvider(mockReporter, mockTable, mockDirection);
    });

    it('creates left command when raw command is LEFT', function(){
        let result = commandParser.getCommandFor('LEFT');

        expect(result instanceof LeftCommand).toBe(true);
    });

    it('creates right command when raw command is RIGHT', function(){
        let result = commandParser.getCommandFor('RIGHT');

        expect(result instanceof RightCommand).toBe(true);
    });

    it('creates move command when raw command is MOVE', function(){
        let result = commandParser.getCommandFor('MOVE');

        expect(result instanceof MoveCommand).toBe(true);
    });

    it('creates report command when raw command starts with REPORT', function(){
        let result = commandParser.getCommandFor('REPORT');

        expect(result instanceof ReportCommand).toBe(true);
    });
    
    it('creates place command when raw command starts with PLACE', function(){
        let result = commandParser.getCommandFor('PLACE');

        expect(result instanceof PlaceCommand).toBe(true);
    });

    it('creates place command with args when raw command is PLACE 1,2,NORTH', function(){
        let result = commandParser.getCommandFor('PLACE 1,2,NORTH');

        expect(result instanceof PlaceCommand).toBe(true);
        expect(result.commandArgs.join(',')).toBe(['1','2','NORTH'].join(','));
    });

    it('returns undefined when null command', function(){
        let result = commandParser.getCommandFor(null);

        expect(result).toBe(undefined);
    });

    it('returns undefined when empty command', function(){
        let result = commandParser.getCommandFor('');

        expect(result).toBe(undefined);
    });

    it('returns undefined when invalid command', function(){
        let result = commandParser.getCommandFor('asdasdsad');

        expect(result).toBe(undefined);
    });
});