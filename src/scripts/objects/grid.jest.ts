import Grid from "./grid";

describe("Grid.render", () => {
  let mockGridEl: any;
  let mockDocument: any;
  let mockCreateElement: any;

  beforeEach(() => {
    mockCreateElement = jest.fn(() => ({
      classList: { add: jest.fn() },
      textContent: "",
    }));

    mockDocument = { createElement: mockCreateElement };
    global.document = mockDocument;

    mockGridEl = { appendChild: jest.fn() };
  });

  test("Render calls createElement correct number of times", () => {
    Grid.render(mockGridEl);
    expect(mockCreateElement).toHaveBeenCalledTimes(25);
  });

  test("Render calls createElement correct number of times", () => {
    Grid.render(mockGridEl, { x: 1, y: 1 }, "NORTH");
    expect(mockCreateElement).toHaveBeenCalledTimes(25);
  });

  test("X position above limit", () => {
    expect(() => Grid.validatePosition({ x: Grid.xLen + 1, y: 1 })).toThrow(
      "Position is not valid"
    );
  });
  test("Y position above limit", () => {
    expect(() => Grid.validatePosition({ x: 1, y: Grid.yLen + 1 })).toThrow(
      "Position is not valid"
    );
  });
  test("X position below limit", () => {
    expect(() => Grid.validatePosition({ x: -1, y: 1 })).toThrow(
      "Position is not valid"
    );
  });
  test("Y position below limit", () => {
    expect(() => Grid.validatePosition({ x: 1, y: -1 })).toThrow(
      "Position is not valid"
    );
  });
});
