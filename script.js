import robot from "./scripts/robot.js";
import { place, move, rotate, report } from "./scripts/controller.js";
// import table from "table.js"; // Not currently used

//Actions
place(robot, 2, 2, "NORTH");
report(robot);
rotate(robot, "LEFT");
move(robot);
report(robot);
rotate(robot, "LEFT");
move(robot);
report(robot);
rotate(robot, "LEFT");
move(robot);

// Allowed actions
// report(robot);
// rotate(robot, "LEFT");
// move(robot);
