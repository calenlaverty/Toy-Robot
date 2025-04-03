import Robot from "../objects/robot";

export class ReportService {
  static apply(object: Robot) {
    const currentObject = object.getState();
    return {
      message:
        `\n~~~START OF REPORT~~~\n` +
        `Robot is located at: x: ${currentObject.position.x}, y: ${currentObject.position.y}\n` +
        `Robot is facing: ${currentObject.facing.toLowerCase()}\n` +
        `~~~~END OF REPORT~~~~`,
      robot: currentObject,
    };
  }
}
