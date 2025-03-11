import { ReportService } from "./report.js";
import { PlaceService, MoveService, RotationService } from "./movements.js";

export class InputHandler {
  static process(commandParts, object, surface) {
    const command = commandParts[0];
    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3];
        PlaceService.apply(object, newPosition, newDirection, surface);
        break;
      }
      case "MOVE": {
        MoveService.apply(object, surface);
        break;
      }
      case "RIGHT":
      case "LEFT": {
        const rotationDirectation = commandParts[0];
        RotationService.apply(object, rotationDirectation, surface);
        break;
      }
      case "REPORT": {
        ReportService.apply(object, surface);
        break;
      }
    }
  }
}
