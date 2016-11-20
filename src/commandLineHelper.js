const readline = require('readline');
import {Simulation} from './simulation';

export class CommandLineHelper{
    constructor(logger, simulation){
        this.logger = logger;
        this.simulation = simulation;
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
                this.simulation.move(input);
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