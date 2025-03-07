import {
  validateDirection,
  validatePosition,
  validateRotation,
} from "./validations.js";
import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "./utils/helpers.js";

export const place = function (object, newXPosition, newYPosition, dir) {
  try {
    validateDirection(dir);
    validatePosition({ x: newXPosition, y: newYPosition });
    return { ...object, x: newXPosition, y: newYPosition, facing: dir };
  } catch (error) {
    console.log(error);
  }
};

export const move = function (object) {
  const movement = MOVEMENT_MAP[object.facing];
  const newPosition = object[movement.axis] + movement.delta;
  try {
    validatePosition({ ...object, [movement.axis]: newPosition });
    return { ...object, [movement.axis]: newPosition };
  } catch (error) {
    console.log(error);
  }
};

export const rotate = (object, dir) => {
  try {
    validateRotation(dir);
    const rotationStep = dir === "RIGHT" ? 1 : -1;
    const newDirectionIndex =
      (CARDINAL_DIRECTIONS.indexOf(object.facing) + rotationStep + 4) % 4;
    return { ...object, facing: CARDINAL_DIRECTIONS[newDirectionIndex] };
  } catch (error) {
    console.log(error);
  }
};

export const report = function (object) {
  console.log(`x: ${object.x}, y: ${object.y}, facing: ${object.facing}`);
};
