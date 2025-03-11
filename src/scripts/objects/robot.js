import { CARDINAL_DIRECTIONS, ALLOWED_ROTATIONS } from "../utils/helpers.js";

export default class Robot {
  constructor() {
    try {
      this.uuid = crypto.randomUUID();
    } catch (e) {
      this.uuid =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      console.log("Using fallback UUID generation");
    }
    this.state = {
      position: { x: undefined, y: undefined },
      facing: undefined,
      onSurface: undefined,
    };
    console.log(`Robot created with uuid: ${this.uuid}`);
  }

  //used getState / setState methods to provide ways for interacting with the objects that don't involve directly changing it in random locations; this provides us more control over how updates are applied to the object
  getState() {
    return { ...this.state };
  }

  setState(newState) {
    this.state = newState;
  }

  validateDirection(dir) {
    if (!CARDINAL_DIRECTIONS.includes(dir)) {
      throw new Error("Invalid direction");
    }
  }

  validateRotation(dir) {
    if (!ALLOWED_ROTATIONS.includes(dir)) {
      throw new Error("Invalid direction");
    }
  }
}
