import {PlaceCommand} from './placeCommand';
import '../../tests/pollyfills.js'

describe('PlaceCommand', () => {

    var mockLogger = {
        log: function(message){}
    }

    var mockTable = {
        isRobotOnTable: function(robot){}
    };

    var mockDirection = {
        validDirections: ['NORTH','EAST','SOUTH','WEST']
    };

    describe('when executing', () => {

        describe('when invalid command args', () => { 
            it('returns null when command args are empty', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, []);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns null when less than three command args', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '2']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns null when more than three command args', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '2', '3', '4']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns null when first command arg cannot be parsed to integer', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['A', '2', '3']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns null when second command arg cannot be parsed to integer', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', 'A', '3']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns null when third command arg not valid direction', function(){

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '2', 'TEST']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
        });

        describe('when valid command args', () => { 
            it('returns null when robot not on table', function(){

                spyOn(mockTable, 'isRobotOnTable').and.returnValue(false);

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['6', '6', 'NORTH']);
                let result = placeCommand.execute();

                expect(result).toBe(null);
            });
            it('returns a robot when on the table', function(){

                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '1', 'NORTH']);
                let result = placeCommand.execute();

                expect(result.X).toBe(1);
                expect(result.Y).toBe(1);
                expect(result.F).toBe('NORTH');
            });
        });

    });
});