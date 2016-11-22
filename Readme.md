# Toy Robot

## Usage
* `npm install`
* Run application: `npm start`
    * command line application ready to take commands
* Tests: `npm run tests`

## Notes 
* Built and tested with node v6.9.1
* Built with Single Responsibility Principle in mind. 
    * Simulation is the orchestrator. Takes in a raw command and executes it if ready to, keeps track of current robot state
    * CommandProvider is responsible for creating a command object based on the raw command. Use of Provider pattern (similar to Factory but has some logic to choose correct command, seems to be a MS patter!)
    * Commands are responsible for executing the command and returning a new robot (never mutate the current robot) in the correct position (or null if now in an invalid position). Use of command pattern.
    * Table is responsible if robot would be valid on table based on the table size
    * Direction is responsible for knowing what orientation next (either left or right)
* `index.Js` is the entry point for command line application. All dependencies are created here. `commandLineHelper.js` used to listen for command line input and passed it to the simulator.
* No logging was done for invalid commands, was not a requirement of the problem.
* Each class has an accompanying `spec` file. These are unit tests with all dependencies mocked.
* `scenarioTests.spec.js` are a set of integration tests to test the provided scenarios plus some extras.

Toy Robot Simulator
===================

Description
-----------

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.

Create an application that can read in commands of the following form:

    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT

- PLACE will put the toy robot on the table in position X,Y and facing NORTH,
  SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any
  sequence of commands may be issued, in any order, including another PLACE
  command. The application should discard all commands in the sequence until
  a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is
  currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form,
  but standard output is sufficient.

- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT
  and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

Constraints
-----------

- The toy robot must not fall off the table during movement. This also
  includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.

Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH

Deliverables
------------

Please provide your source code, and any test code/data you using in
developing your solution.

Please engineer your solution to a standard you consider suitable for
production. It is not required to provide any graphical output showing the
movement of the toy robot.
