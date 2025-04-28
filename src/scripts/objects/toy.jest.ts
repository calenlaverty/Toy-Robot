import Toy from "./toy";

describe("Toy Superclass", () => {
  let toy: Toy;

  beforeEach(() => {
    toy = new Toy();
  });

  test("move() throws error when not implemented", () => {
    expect(() => toy.move()).toThrow("Move not yet implemented");
  });

  test("rotate() throws error when not implemented", () => {
    expect(() => toy.rotate("LEFT")).toThrow("Rotate not yet implemented");
  });

  test("place() throws error when not implemented", () => {
    const position = { x: 0, y: 0 };
    expect(() => toy.place({ x: 1, y: 1 }, "NORTH")).toThrow(
      "Place not yet implemented"
    );
  });
});
