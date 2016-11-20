import {ToyRobotGame} from './toyRobotGame';
import {Board} from './board';
import {CommandProvider} from './commandProvider';

import {CommandLineHelper} from './commandLineHelper';

let toyRobotGame = new ToyRobotGame(console, new Board(console), new CommandProvider(console));
let commandLineHelper = new CommandLineHelper(console, toyRobotGame);

//todo: would prefer to pass toyRobotGame.move in as a call back instead of the instance being passed.
commandLineHelper.listenForInput();