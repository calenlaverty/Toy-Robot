import {
  Coordinate,
  State,
  RotationType,
  DirectionType,
  Uuid,
} from "../utils/types";

export default class Toy {
  constructor(
    public uuid: Uuid = crypto.randomUUID(),
    public state: State = {
      position: { x: 0, y: 0 },
      facing: "NORTH",
    }
  ) {}
  move(userId: string) {
    throw new Error("Move not yet implemented");
  }
  rotate(dir: RotationType, userId: string) {
    throw new Error("Rotate not yet implemented");
  }
  place(position: Coordinate, dir: DirectionType, userId: string) {
    throw new Error("Place not yet implemented");
  }
}
