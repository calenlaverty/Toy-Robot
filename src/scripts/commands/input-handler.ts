import { ReportService } from "./report";
import { DirectionType, RotationType } from "../utils/types";
import Robot from "../objects/robot";
export class InputHandler {
  static process(commandParts: string[], object: Robot) {
    let command: string;
    if (commandParts[0] === "LEFT" || commandParts[0] === "RIGHT") {
      command = commandParts[0] as RotationType;
    } else {
      command = commandParts[0] as string;
    }
    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3] as DirectionType;
        return object.place(newPosition, newDirection);
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
