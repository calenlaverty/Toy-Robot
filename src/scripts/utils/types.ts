export type Coordinate = { x: number; y: number };

export type Uuid = `${string}-${string}-${string}-${string}-${string}`;

export type State = {
  position: Coordinate;
  facing: DirectionType;
};

export type RotationType = "LEFT" | "RIGHT";

export type DirectionType = "NORTH" | "EAST" | "SOUTH" | "WEST";

export enum Direction {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}
