import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "../utils/helpers.js";

export class PlaceService {
  static apply(object, position, dir, surface) {
    try {
      const currentObject = object.getState();
      object.validateDirection(dir);
      surface.validatePosition(position);
      object.setState({
        ...currentObject,
        position,
        facing: dir,
        onSurface: surface,
      });
      return `Placed Robot at x:${position.x}, y:${
        position.y
      }, facing ${dir.toLowerCase()}`;
    } catch (error) {
      return error;
    }
  }
}

export class MoveService {
  static apply(object, surface) {
    try {
      const currentObject = object.getState();
      surface.validateObjectIsOnThisSurface(currentObject);
      const movement = MOVEMENT_MAP[currentObject.facing];
      const newPosition =
        currentObject.position[movement.axis] + movement.delta;
      currentObject.onSurface.validatePosition({
        currentObject,
        [movement.axis]: newPosition,
      });
      const newState = {
        ...currentObject,
        position: {
          ...currentObject.position,
          [movement.axis]: newPosition,
        },
      };
      object.setState(newState);
      console.log(newState);
      return `Moved ${currentObject.facing.toLowerCase()}; New position is x:${
        newState.position.x
      }, y:${newState.position.y}`;
    } catch (error) {
      return error;
    }
  }
}

export class RotationService {
  static apply(object, dir, surface) {
    try {
      const currentObject = object.getState();
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
      return `Rotated ${dir.toLowerCase()}`;
    } catch (error) {
      return error;
    }
  }
}
