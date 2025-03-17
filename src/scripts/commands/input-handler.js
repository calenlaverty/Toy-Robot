import { ReportService } from "./report.js";

export class InputHandler {
  static process(commandParts, object, surface) {
    const command = commandParts[0];
    switch (command) {
      case "PLACE": {
        const newPosition = { x: +commandParts[1], y: +commandParts[2] };
        const newDirection = commandParts[3];
        return object.place(newPosition, newDirection, surface);
      }
      case "MOVE": {
        return object.move(surface);
      }
      case "RIGHT":
      case "LEFT": {
        return object.rotate(commandParts[0], surface);
      }
      case "REPORT": {
        return ReportService.apply(object, surface);
      }
      default:
        return "Not a valid command";
    }
  }
}
