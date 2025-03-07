import table from "./scripts/objects/table.js";
import robot from "./scripts/objects/robot.js";
import { place, move, rotate, report } from "./scripts/controller.js";

let robotState = robot;
robotState = place(robotState, { x: 1, y: 2 }, "NORTH", table);
report(robotState);

robotState = rotate(robotState, "LEFT");
report(robotState);
robotState = rotate(robotState, "LEFT");
report(robotState);

robotState = move(robotState);
report(robotState);
robotState = move(robotState);
report(robotState);
