import table from "./objects/table.js";
import { CARDINAL_DIRECTIONS, ALLOWED_ROTATIONS } from "./utils/helpers.js";

export const validateDirection = function (dir) {
  if (!CARDINAL_DIRECTIONS.includes(dir)) {
    throw new Error("Invalid direction");
  }
};

export const validateRotation = function (dir) {
  if (!ALLOWED_ROTATIONS.includes(dir)) {
    throw new Error("Invalid direction");
  }
};

export const validatePosition = function (pos) {
  if (pos.x < 0 || pos.x > table.xLen || pos.y < 0 || pos.y > table.yLen) {
    throw new Error("Position is outside of bounds");
  }
};
