export default class Toy {
  constructor() {
    this.uuid = crypto.randomUUID();
    this.state = {
      position: { x: undefined, y: undefined },
      facing: undefined,
      onSurface: undefined,
    };
  }
  move() {
    throw new Error("Move not yet implemented");
  }
  rotate() {
    throw new Error("Rotate not yet implemented");
  }
  place() {
    throw new Error("Place not yet implemented");
  }
}
