import { Coordinate, State } from "../utils/types";

export default class Toy {
  constructor(
    public uuid = crypto.randomUUID(),
    public state: State = {
      position: { x: 0, y: 0 },
      facing: "NORTH",
      onSurface: undefined,
    }
  ) {}
  move(surface: any) {
    throw new Error("Move not yet implemented");
  }
  rotate(dir: string, surface: any) {
    throw new Error("Rotate not yet implemented");
  }
  place(position: Coordinate, dir: string, surface: any) {
    throw new Error("Place not yet implemented");
  }
}
