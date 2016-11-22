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
        simulation = new Simulation(table, new CommandProvider(mockReporter, table, direction));
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

});