import {CommandProvider} from './commandProvider';
import {LeftCommand} from './commands/leftCommand';
import {MoveCommand} from './commands/moveCommand';
import {PlaceCommand} from './commands/placeCommand';
import {ReportCommand} from './commands/reportCommand';
import {RightCommand} from './commands/rightCommand';

import '../tests/pollyfills.js'

describe('CommandProvider', () => {

    var mockLogger = {
        log: function(message){}
    }

    it('creates left command when raw command is LEFT', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('LEFT');

        expect(result instanceof LeftCommand).toBe(true);
    });

    it('creates right command when raw command is RIGHT', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('RIGHT');

        expect(result instanceof RightCommand).toBe(true);
    });

    it('creates move command when raw command is MOVE', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('MOVE');

        expect(result instanceof MoveCommand).toBe(true);
    });

    it('creates report command when raw command starts with REPORT', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('REPORT');

        expect(result instanceof ReportCommand).toBe(true);
    });
    
    it('creates place command when raw command starts with PLACE', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('PLACE');

        expect(result instanceof PlaceCommand).toBe(true);
    });

    it('returns undefined when null command', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for(null);

        expect(result).toBe(undefined);
    });

    it('returns undefined when empty command', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('');

        expect(result).toBe(undefined);
    });

    it('returns undefined when invalid command', function(){
        let commandParser = new CommandProvider(mockLogger);
        let result = commandParser.for('asdasdsad');

        expect(result).toBe(undefined);
    });
});