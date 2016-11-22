import {Simulation} from './simulation';
import {Table} from './table';
import {Direction} from './direction';
import {CommandProvider} from './commandProvider';

import '../tests/polyfills.js'

describe('Scenarios', () => {

    var mockReporter = { 
        report: function(message) {}
    }

    var simulation;
    beforeEach(function() {
        let table = new Table();
        let direction = new Direction();
        simulation = new Simulation(new CommandProvider(mockReporter, table, direction));
    });

    describe('Provided scenarios', () => {

        it('returns correct when running example A', function(){

            /*
            PLACE 0,0,NORTH
            MOVE
            REPORT

            Expected output:

            0,1,NORTH
            */

            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,NORTH');
            simulation.move('MOVE');
            simulation.move('REPORT');

            expect(mockReporter.report).toHaveBeenCalledWith('0,1,NORTH');

        });

        it('returns correct when running example B', function(){

            /*
            PLACE 0,0,NORTH
            LEFT
            REPORT

            Expected output:

            0,0,WEST
            */

            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,NORTH');
            simulation.move('LEFT');
            simulation.move('REPORT');

            expect(mockReporter.report).toHaveBeenCalledWith('0,0,WEST');

        });

        it('returns correct when running example B', function(){

            /*
            PLACE 1,2,EAST
            MOVE
            MOVE
            LEFT
            MOVE
            REPORT

            Expected output

            3,3,NORTH
            */

            spyOn(mockReporter, 'report');

            simulation.move('PLACE 1,2,EAST');
            simulation.move('MOVE');
            simulation.move('MOVE');
            simulation.move('LEFT');
            simulation.move('MOVE');
            simulation.move('REPORT');

            expect(mockReporter.report).toHaveBeenCalledWith('3,3,NORTH');

        });   
    });

    describe('Extra scenarios', () => {
        it('does not report when not placed', function(){
            spyOn(mockReporter, 'report');

            simulation.move('REPORT');

            expect(mockReporter.report).not.toHaveBeenCalled();

        }); 

        it('moves around to the left', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,NORTH');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,NORTH');
            mockReporter.report.calls.reset();

            simulation.move('LEFT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,WEST');
            mockReporter.report.calls.reset();

            simulation.move('LEFT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,SOUTH');
            mockReporter.report.calls.reset();

            simulation.move('LEFT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,EAST');
            mockReporter.report.calls.reset();

            simulation.move('LEFT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,NORTH');

        }); 

        it('moves around to the right', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,NORTH');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,NORTH');
            mockReporter.report.calls.reset();

            simulation.move('RIGHT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,EAST');
            mockReporter.report.calls.reset();

            simulation.move('RIGHT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,SOUTH');
            mockReporter.report.calls.reset();

            simulation.move('RIGHT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,WEST');
            mockReporter.report.calls.reset();

            simulation.move('RIGHT');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,NORTH');
        }); 

        it('moves north', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,NORTH');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,NORTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,1,NORTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,2,NORTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,3,NORTH');
            mockReporter.report.calls.reset();
            
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,4,NORTH');
            mockReporter.report.calls.reset();

            //cant move any further...check still in same spot
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,4,NORTH');
        }); 

        it('moves south', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,4,SOUTH');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,4,SOUTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,3,SOUTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,2,SOUTH');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,1,SOUTH');
            mockReporter.report.calls.reset();
            
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,SOUTH');
            mockReporter.report.calls.reset();

            //cant move any further...check still in same spot
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,SOUTH');
        }); 

        it('moves west', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 4,0,WEST');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('4,0,WEST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('3,0,WEST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('2,0,WEST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('1,0,WEST');
            mockReporter.report.calls.reset();
            
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,WEST');
            mockReporter.report.calls.reset();

            //cant move any further...check still in same spot
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,WEST');
        }); 

        it('moves east', function(){
            spyOn(mockReporter, 'report');

            simulation.move('PLACE 0,0,EAST');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('0,0,EAST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('1,0,EAST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('2,0,EAST');
            mockReporter.report.calls.reset();

            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('3,0,EAST');
            mockReporter.report.calls.reset();
            
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('4,0,EAST');
            mockReporter.report.calls.reset();

            //cant move any further...check still in same spot
            simulation.move('MOVE');
            simulation.move('REPORT');
            expect(mockReporter.report).toHaveBeenCalledWith('4,0,EAST');
        }); 
    });
});