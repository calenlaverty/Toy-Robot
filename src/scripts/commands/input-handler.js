import { ReportService } from "./report.js";
import { PlaceService, MoveService, RotationService } from "./movements.js";

export class InputHandler {
  static process(commandParts, object, surface) {
    const command = commandParts[0];
    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3];
        return PlaceService.apply(object, newPosition, newDirection, surface);
      }
      case "MOVE": {
        return MoveService.apply(object, surface);
      }
      case "RIGHT":
      case "LEFT": {
        return RotationService.apply(object, commandParts[0], surface);
      }
      case "REPORT": {
        return ReportService.apply(object, surface);
      }
      default:
        return "Not a valid command";
    }
  }
}
