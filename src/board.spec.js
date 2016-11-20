import {Board} from './board';
import '../tests/pollyfills.js'

describe('Board', () => {

    describe('when calling isRobotInValidPositionForBoard', () => {

        var mockLogger = {
            log: function(message){}
        }

        it('returns false when robot has no X position', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has no Y position', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                X: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has negative X position', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                X: -1,
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has negative Y position', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                X: 0,
                Y: -1,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has X position greater than 4', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                X: 5,
                Y: 0,
                F: 'N'
            })).toBe(false);
        });

        it('returns false when robot has Y position greater than 4', () => {
            let board = new Board(mockLogger);
            expect(board.isRobotInValidPositionForBoard({
                X: 0,
                Y: 5,
                F: 'N'
            })).toBe(false);
        });

        it('returns true when robot has X and Y position between 0 and 4', () => {
            let board = new Board(mockLogger);
            
             for (var x = 0; x < 5; x++) {
                 for (var y= 0; y < 5; y++) {
                    var tr = {
                        X: 0,
                        Y: 0,
                        F: 'N'
                    };

                    var result =board.isRobotInValidPositionForBoard(tr);
                    expect(result).toBe(true);
                 }
             }
        });
    });
});