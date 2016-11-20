import {Simulation} from './simulation';
import {Table} from './table';
import {CommandProvider} from './commandProvider';

import {CommandLineHelper} from './commandLineHelper';

let table = new Table(console);
let simulation = new Simulation(console, table, new CommandProvider(console, table));
let commandLineHelper = new CommandLineHelper(console, simulation);

//todo: would prefer to pass simulation.move in as a call back instead of the instance being passed.
commandLineHelper.listenForInput();