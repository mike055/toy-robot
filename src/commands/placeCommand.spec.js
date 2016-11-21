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
        isValidDirection: function(direction) { }
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
                const invalidDir ='TEST';
                spyOn(mockDirection, 'isValidDirection').and.returnValue(false);

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '2', invalidDir]);
                let result = placeCommand.execute();

                expect(result).toBe(null);
                expect(mockDirection.isValidDirection).toHaveBeenCalledWith(invalidDir);
            });
        });

        describe('when valid command args', () => { 
            it('returns null when robot not on table', function(){
                const dir = 'NORTH';

                spyOn(mockTable, 'isRobotOnTable').and.returnValue(false);
                spyOn(mockDirection, 'isValidDirection').and.returnValue(true);

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['6', '6', dir]);
                let result = placeCommand.execute();

                expect(mockTable.isRobotOnTable).toHaveBeenCalled();
                expect(mockDirection.isValidDirection).toHaveBeenCalledWith(dir);
                expect(result).toBe(null);
            });
            it('returns a robot when on the table', function(){
                const dir = 'NORTH';

                spyOn(mockTable, 'isRobotOnTable').and.returnValue(true);
                spyOn(mockDirection, 'isValidDirection').and.returnValue(true);

                let placeCommand = new PlaceCommand(mockLogger, mockTable, mockDirection, ['1', '1', dir]);
                let result = placeCommand.execute();

                expect(mockTable.isRobotOnTable).toHaveBeenCalled();
                expect(mockDirection.isValidDirection).toHaveBeenCalledWith(dir);
                expect(result.X).toBe(1);
                expect(result.Y).toBe(1);
                expect(result.F).toBe('NORTH');
            });
        });

    });
});