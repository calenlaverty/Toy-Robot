import Toy from "./toy";
import { Coordinate, State, DirectionType, RotationType } from "../utils/types";
import { CARDINAL_DIRECTIONS, MOVEMENT_MAP } from "../utils/helpers";

export default class Robot extends Toy {
  constructor() {
    super();
  }

  getState() {
    return { ...this.state };
  }

  setState(newState: State) {
    this.state = newState;
  }

  place(position: Coordinate, dir: DirectionType) {
    try {
      this.setState({
        ...this.getState(),
        position,
        facing: dir,
      });
      return `Placed Robot at x:${position.x}, y:${
        position.y
      }, facing ${dir.toLowerCase()}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  move() {
    try {
      const currentState = this.getState();
      const movement =
        MOVEMENT_MAP[currentState.facing as keyof typeof MOVEMENT_MAP];
      const axis = movement.axis as keyof Coordinate;
      const newPosition = currentState.position[axis] + movement.delta;

      const newState = {
        ...currentState,
        position: {
          ...currentState.position,
          [movement.axis]: newPosition,
        },
      };
      this.setState(newState);
      return `Moved ${
        currentState.facing?.toLowerCase() || ""
      }; New position is x:${newState.position.x}, y:${newState.position.y}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  rotate(dir: RotationType) {
    try {
      const currentState = this.getState();
      const rotationStep = dir === "RIGHT" ? 1 : -1;
      const newDirectionIndex =
        (CARDINAL_DIRECTIONS.indexOf(currentState.facing || "") +
          rotationStep +
          CARDINAL_DIRECTIONS.length) %
        CARDINAL_DIRECTIONS.length;
      this.setState({
        ...currentState,
        facing: CARDINAL_DIRECTIONS[newDirectionIndex] as DirectionType,
      });
      return `Rotated ${dir.toLowerCase()}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
