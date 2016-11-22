import {Reporter} from '../reporter';

export class ReportCommand{
    constructor(reporter){
        this.reporter = reporter;
    }

    execute(robot) {
        this.reporter.report(`${robot.X},${robot.Y},${robot.F}`);
        return robot;
    }
}