import { CARDINAL_DIRECTIONS, ALLOWED_ROTATIONS } from "../utils/helpers.js";

class Robot {
  constructor() {
    (this.position = { x: undefined, y: undefined }),
      (this.y = undefined),
      (this.facing = undefined),
      (this.onSurface = undefined);
  }

  validateDirection = function (dir) {
    if (!CARDINAL_DIRECTIONS.includes(dir)) {
      throw new Error("Invalid direction");
    }
  };

  validateRotation = function (dir) {
    if (!ALLOWED_ROTATIONS.includes(dir)) {
      throw new Error("Invalid direction");
    }
  };

  validateHasBeenPlaced = function () {
    if (this.onSurface == null) {
      throw new Error("Not on a surface");
    }
  };
}

export default new Robot();
