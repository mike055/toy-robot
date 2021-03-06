const readline = require('readline');
import {Simulation} from './simulation';

export class CommandLineHelper{
    constructor(simulation){
        this.simulation = simulation;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    listenForInput() {
        const prompt = 'Waiting for input...';

        console.log(prompt);

        this.rl.on('line', (input) => {
            if(input === 'QUIT') {
                this.rl.close();
            }
            else {
                this.simulation.move(input);
                console.log(prompt);
            }
        });
    }
}