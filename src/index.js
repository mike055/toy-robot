import {Simulation} from './simulation';
import {Table} from './table';
import {Direction} from './direction';
import {CommandProvider} from './commandProvider';
import {Reporter} from './reporter';

import {CommandLineHelper} from './commandLineHelper';

let table = new Table();
let direction = new Direction();
let reporter = new Reporter();
let simulation = new Simulation(new CommandProvider(reporter, table, direction));

let commandLineHelper = new CommandLineHelper(simulation);
commandLineHelper.listenForInput();