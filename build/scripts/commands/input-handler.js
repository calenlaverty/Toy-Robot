"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputHandler = void 0;
const report_1 = require("./report");
class InputHandler {
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
                return report_1.ReportService.apply(object, surface);
            }
            default:
                return "Not a valid command";
        }
    }
}
exports.InputHandler = InputHandler;
