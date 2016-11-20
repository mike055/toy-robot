const readline = require('readline');
import {ToyRobotGame} from './toyRobotGame';

export class CommandLineHelper{
    constructor(logger, toyRobotGame){
        this.logger = logger;
        this.toyRobotGame = toyRobotGame;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    listenForInput() {
        this._writeLog();
        this._promptForInput();

        this.rl.on('line', (input) => {
            if(input === 'QUIT') {
                this.rl.close();
            }
            else {
                this.toyRobotGame.move(input);
                this._promptForInput();
            }
        });
    }
    
    _writeLog() {
        this.logger.log('Toy Robot');
        this.logger.log('Valid commands');
        this.logger.log('PLACE X,Y,F');
        this.logger.log('MOVE');
        this.logger.log('LEFT');
        this.logger.log('RIGHT');
        this.logger.log('REPORT');
        this.logger.log('QUIT');
    }

    _promptForInput() {
        this.logger.log('');
        this.logger.log('Waiting for input...')
    }
}