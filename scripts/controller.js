import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "./utils/helpers.js";

export const place = function (object, position, dir, surface) {
  try {
    object.validateDirection(dir);
    surface.validatePosition(position);
    return {
      ...object,
      position,
      facing: dir,
      onSurface: surface,
    };
  } catch (error) {
    console.error(error);
    return object;
  }
};

export const move = function (object) {
  const movement = MOVEMENT_MAP[object.facing];
  const newPosition = object.position[movement.axis] + movement.delta;
  try {
    object.validateHasBeenPlaced();
    object.onSurface.validatePosition({
      ...object,
      [movement.axis]: newPosition,
    });
    return {
      ...object,
      position: {
        ...object.position,
        [movement.axis]: newPosition,
      },
    };
  } catch (error) {
    console.error(error);
    return object;
  }
};

export const rotate = (object, dir) => {
  try {
    object.validateHasBeenPlaced();
    object.validateRotation(dir);
    const rotationStep = dir === "RIGHT" ? 1 : -1;
    const newDirectionIndex =
      (CARDINAL_DIRECTIONS.indexOf(object.facing) + rotationStep + 4) % 4;
    return { ...object, facing: CARDINAL_DIRECTIONS[newDirectionIndex] };
  } catch (error) {
    console.error(error);
    return object;
  }
};

export const report = function (object) {
  try {
    object.validateHasBeenPlaced();
    console.log(
      `x: ${object.position.x}, y: ${object.position.y}, facing: ${object.facing}`
    );
  } catch (error) {
    console.error(error);
  }
};
