import robot from "./scripts/robot.js";
import { place, move, rotate, report } from "./scripts/controller.js";

//Actions
place(robot, 2, 2, "NORTH");
report(robot);
rotate(robot, "LEFT");
move(robot);
move(robot);
move(robot);
move(robot);
move(robot);
move(robot);
report(robot);

// Allowed actions
// report(robot);
// rotate(robot, "LEFT");
// move(robot);
