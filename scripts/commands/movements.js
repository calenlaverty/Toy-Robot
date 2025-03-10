import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "../utils/helpers.js";

export class PlaceService {
  static apply = function (object, position, dir, surface) {
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
}

export class MoveService {
  static apply = function (object) {
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
}

export class RotationService {
  static apply = (object, dir) => {
    try {
      object.validateHasBeenPlaced();
      object.validateRotation(dir);
      const rotationStep = dir === "RIGHT" ? 1 : -1;
      const newDirectionIndex =
        (CARDINAL_DIRECTIONS.indexOf(object.facing) +
          rotationStep +
          CARDINAL_DIRECTIONS.length) %
        CARDINAL_DIRECTIONS.length;
      return { ...object, facing: CARDINAL_DIRECTIONS[newDirectionIndex] };
    } catch (error) {
      console.error(error);
      return object;
    }
  };
}
