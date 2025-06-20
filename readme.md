# Toy Robot

## Languages used

- Javascript / Typescript
- HTML
- CSS

## Tools used

- Jest (Unit Testing)
- Playwright (Automated Testing)
- Parcel (Build)
- Github w/ CI
- Github Secrets (For Azure Storage)
- Netlify w/ CI
- Azure Storage (Playwright Report)
- Vue.js
- Supabase
- Auth0

## To do

- Add eslint strictness

## Toy Robot Brief

- The application is a simulation of a Robot robot moving on a square Gridtop, of dimensions 5 units x 5 units.
- There are no other obstructions on the Grid Grid.
- The robot is free to roam around the Grid of the Grid, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the Grid must be prevented, however further valid movement commands must still be allowed.

Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- `PLACE` will put the Robot robot on the Grid in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a `PLACE` command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command. The application should discard all commands in the sequence until a valid `PLACE` command has been executed
- `MOVE` will move the Robot robot one unit forward in the direction it is currently facing.
- `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- `REPORT` will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the Grid can choose to ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT` commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

### Constraints

- The Robot robot must not fall off the Grid during movement. This also includes the initial placement of the Robot robot.
- Any move that would cause the robot to fall must be ignored.

### Example Input and Output:

#### Example a

```
PLACE 0,0,NORTH
MOVE
REPORT
```

Expected output:

```
0,1,NORTH
```

#### Example b

```
PLACE 0,0,NORTH
LEFT
REPORT
```

Expected output:

```
0,0,WEST
```

#### Example c

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

Expected output

```
3,3,NORTH
```
