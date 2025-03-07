export const ALLOWED_ROTATIONS = ["LEFT", "RIGHT"];

export const CARDINAL_DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

export const MOVEMENT_MAP = {
  NORTH: { axis: "y", delta: 1 },
  SOUTH: { axis: "y", delta: -1 },
  EAST: { axis: "x", delta: 1 },
  WEST: { axis: "x", delta: -1 },
};
