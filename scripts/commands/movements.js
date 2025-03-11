import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "../utils/helpers.js";

export class PlaceService {
  static apply(object, position, dir, surface) {
    const currentObject = object.getState();
    try {
      object.validateDirection(dir);
      surface.validatePosition(position);
      object.setState({
        ...currentObject,
        position,
        facing: dir,
        onSurface: surface,
      });
    } catch (error) {
      console.error(error);
      return object;
    }
  }
}

export class MoveService {
  static apply(object, surface) {
    const currentObject = object.getState();
    const movement = MOVEMENT_MAP[currentObject.facing];
    const newPosition = currentObject.position[movement.axis] + movement.delta;
    try {
      surface.validateObjectIsOnThisSurface(currentObject);
      currentObject.onSurface.validatePosition({
        currentObject,
        [movement.axis]: newPosition,
      });
      object.setState({
        ...currentObject,
        position: {
          ...currentObject.position,
          [movement.axis]: newPosition,
        },
      });
    } catch (error) {
      console.error(error);
      return object;
    }
  }
}

export class RotationService {
  static apply(object, dir, surface) {
    const currentObject = object.getState();
    try {
      surface.validateObjectIsOnThisSurface(currentObject);
      object.validateRotation(dir);
      const rotationStep = dir === "RIGHT" ? 1 : -1;
      const newDirectionIndex =
        (CARDINAL_DIRECTIONS.indexOf(currentObject.facing) +
          rotationStep +
          CARDINAL_DIRECTIONS.length) %
        CARDINAL_DIRECTIONS.length;
      object.setState({
        ...currentObject,
        facing: CARDINAL_DIRECTIONS[newDirectionIndex],
      });
    } catch (error) {
      console.error(error);
      return object;
    }
  }
}
