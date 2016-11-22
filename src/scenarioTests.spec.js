import {Simulation} from './simulation';
import {Table} from './table';
import {Direction} from './direction';
import {CommandProvider} from './commandProvider';

let table = new Table(console);
let direction = new Direction(console);
let simulation = new Simulation(console, table, new CommandProvider(console, table, direction));

import '../tests/polyfills.js'

xdescribe('Scenarios', () => {

    describe('Provided scenarions', () => {

        it('returns correct when running example A', function(){

            simulation.move('a command');

        })
    });
});