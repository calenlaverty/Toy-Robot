import { Coordinate } from "./types";

export class GridUtils {
  static xLen = 5;
  static yLen = 5;

  static validatePosition(pos: Coordinate) {
    if (
      pos.x < 0 ||
      pos.x > this.xLen - 1 ||
      pos.y < 0 ||
      pos.y > this.yLen - 1
    ) {
      throw new Error("Position is not valid");
    }
  }

  static generateCells() {
    const cells = [];
    for (let y = this.yLen - 1; y >= 0; y--) {
      for (let x = 0; x < this.xLen; x++) {
        cells.push({ x, y });
      }
    }
    return cells;
  }
}
