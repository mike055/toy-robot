import {Simulation} from './simulation';
import {Table} from './table';
import {CommandProvider} from './commandProvider';

import {CommandLineHelper} from './commandLineHelper';

let simulation = new Simulation(console, new Table(console), new CommandProvider(console));
let commandLineHelper = new CommandLineHelper(console, toyRobotGame);

//todo: would prefer to pass toyRobotGame.move in as a call back instead of the instance being passed.
commandLineHelper.listenForInput();