import Toy from "./toy.js";

import {
  CARDINAL_DIRECTIONS,
  ALLOWED_ROTATIONS,
  MOVEMENT_MAP,
} from "../utils/helpers.js";

export default class Robot extends Toy {
  constructor() {
    super();
  }

  getState() {
    return { ...this.state };
  }

  setState(newState) {
    this.state = newState;
  }

  place(position, dir, surface) {
    try {
      this.validateDirection(dir);
      surface.validatePosition(position);
      this.setState({
        ...this.getState(),
        position,
        facing: dir,
        onSurface: surface,
      });
      return `Placed Robot at x:${position.x}, y:${
        position.y
      }, facing ${dir.toLowerCase()}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  move(surface) {
    try {
      const currentState = this.getState();
      surface.validateObjectIsOnThisSurface(currentState);
      const movement = MOVEMENT_MAP[currentState.facing];
      const newPosition = currentState.position[movement.axis] + movement.delta;
      currentState.onSurface.validatePosition({
        currentState,
        [movement.axis]: newPosition,
      });
      const newState = {
        ...currentState,
        position: {
          ...currentState.position,
          [movement.axis]: newPosition,
        },
      };
      this.setState(newState);
      return `Moved ${currentState.facing.toLowerCase()}; New position is x:${
        newState.position.x
      }, y:${newState.position.y}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  rotate(dir, surface) {
    try {
      const currentState = this.getState();
      surface.validateObjectIsOnThisSurface(currentState);
      this.validateRotation(dir);
      const rotationStep = dir === "RIGHT" ? 1 : -1;
      const newDirectionIndex =
        (CARDINAL_DIRECTIONS.indexOf(currentState.facing) +
          rotationStep +
          CARDINAL_DIRECTIONS.length) %
        CARDINAL_DIRECTIONS.length;
      this.setState({
        ...currentState,
        facing: CARDINAL_DIRECTIONS[newDirectionIndex],
      });
      return `Rotated ${dir.toLowerCase()}`;
    } catch (error) {
      console.error(error);
      return error;
    }
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
