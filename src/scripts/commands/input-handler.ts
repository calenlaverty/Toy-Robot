import { ReportService } from "./report";
import { DirectionType, RotationType } from "../utils/types";
import { CARDINAL_DIRECTIONS, ROTATION_COMMANDS } from "../utils/helpers";
import Robot from "../objects/robot";
import { GridUtils as Grid } from "../utils/grid";

export const validateDirection = function (direction: DirectionType) {
  if (CARDINAL_DIRECTIONS.includes(direction) !== true) {
    throw new Error("Command is not valid.");
  }
};

export const validateRobotExists = function (robot: Robot | null) {
  if (robot) {
    return true;
  }
  throw new Error(
    "Robot does not exist; use the PLACE commands to create the Robot."
  );
};

export abstract class InputHandler {
  static process(
    commandParts: string[],
    robot: Robot | null
  ): { message: string; robot: Robot | null } {
    const command = ROTATION_COMMANDS.includes(commandParts[0])
      ? (commandParts[0] as RotationType)
      : commandParts[0];

    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3] as DirectionType;
        try {
          validateDirection(newDirection);
          Grid.validatePosition(newPosition);
          if (!robot) {
            robot = new Robot();
          }
          return robot.place(newPosition, newDirection);
        } catch (error: unknown) {
          throw new Error(String(error));
        }
      }
      case "MOVE": {
        try {
          validateRobotExists(robot);
          return robot!.move();
        } catch (error: unknown) {
          throw new Error(String(error));
        }
      }
      case "RIGHT":
      case "LEFT": {
        try {
          validateRobotExists(robot);
          return robot!.rotate(command);
        } catch (error: unknown) {
          throw new Error(String(error));
        }
      }
      case "REPORT": {
        try {
          validateRobotExists(robot);
          return {
            message: ReportService.apply(robot!).message,
            robot: robot!,
          };
        } catch (error: unknown) {
          throw new Error(String(error));
        }
      }
      default:
        try {
          validateRobotExists(robot);
          return {
            message: "Not a valid command",
            robot: robot!,
          };
        } catch (error: unknown) {
          return {
            message: String(error),
            robot: null,
          };
        }
    }
  }
}
