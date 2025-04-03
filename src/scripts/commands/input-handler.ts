import { ReportService } from "./report";
import { DirectionType, RotationType } from "../utils/types";
import { CARDINAL_DIRECTIONS, ROTATION_COMMANDS } from "../utils/helpers";
import Robot from "../objects/robot";

const validationDirection = function (direction: DirectionType) {
  return CARDINAL_DIRECTIONS.includes(direction);
};
export class InputHandler {
  static process(commandParts: string[], object: Robot, command: string) {
    command = CARDINAL_DIRECTIONS.includes(commandParts[0])
      ? (commandParts[0] as DirectionType)
      : ROTATION_COMMANDS.includes(commandParts[0])
      ? (commandParts[0] as RotationType)
      : commandParts[0];

    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3] as DirectionType;
        try {
          validationDirection(newDirection);
          return object.place(newPosition, newDirection);
        } catch (error: unknown) {
          throw new Error(`An error occurred: ${error}`);
        }
      }
      case "MOVE": {
        return object.move();
      }
      case "RIGHT":
      case "LEFT": {
        return object.rotate(command);
      }
      case "REPORT": {
        return ReportService.apply(object);
      }
      default:
        return "Not a valid command";
    }
  }
}
