import {Table} from './table';
import '../tests/pollyfills.js'

describe('Table', () => {

    describe('when calling isRobotInValidPositionForTable', () => {

        var mockLogger = {
            log: function(message){}
        }

        it('returns false when robot has no X position', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has no Y position', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                X: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has negative X position', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                X: -1,
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has negative Y position', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                X: 0,
                Y: -1,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has X position greater than 4', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                X: 5,
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has Y position greater than 4', () => {
            let table = new Table(mockLogger);
            expect(table.isRobotInValidPositionForTable({
                X: 0,
                Y: 5,
                F: 'N'
            })).toBe(false);
        });

        it('returns true when robot has X and Y position between 0 and 4', () => {
            let table = new Table(mockLogger);
            
             for (var x = 0; x < 5; x++) {
                 for (var y= 0; y < 5; y++) {
                    var tr = {
                        X: 0,
                        Y: 0,
                        F: 'N'
                    };

                    var result =table.isRobotInValidPositionForTable(tr);
                    expect(result).toBe(true);
                 }
             }
        });
    });
});