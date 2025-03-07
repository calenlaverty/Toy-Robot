import robot from "./scripts/objects/robot.js";
import { place, move, rotate, report } from "./scripts/controller.js";
let robotState = robot;

//Actions
robotState = rotate(robotState, "LEFT");
report(robotState);
robotState = rotate(robotState, "LEFT");
report(robotState);
robotState = rotate(robotState, "LEFT");
report(robotState);
robotState = rotate(robotState, "LEFT");
report(robotState);
