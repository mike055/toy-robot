import {Simulation} from './simulation';
import {Table} from './table';
import {Direction} from './direction';
import {CommandProvider} from './commandProvider';

import {CommandLineHelper} from './commandLineHelper';

let table = new Table();
let direction = new Direction();
let simulation = new Simulation(table, new CommandProvider(console, table, direction));
let commandLineHelper = new CommandLineHelper(simulation);

//todo: would prefer to pass simulation.move in as a call back instead of the instance being passed.
commandLineHelper.listenForInput();