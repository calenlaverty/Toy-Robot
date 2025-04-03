import { Coordinate, DirectionType } from "../utils/types";

export default class Grid {
  static xLen = 5;
  static yLen = 5;

  constructor() {}

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

  static render(
    GridEl: HTMLTableElement,
    robotPosition?: Coordinate,
    robotDirection?: DirectionType
  ) {
    for (let y = this.yLen - 1; y >= 0; y--) {
      for (let x = 0; x < this.yLen; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = `${x},${y}`;
        GridEl.appendChild(cell);
        if (
          robotDirection &&
          robotPosition &&
          robotPosition.x === x &&
          robotPosition.y === y
        ) {
          cell.classList.add("robot");
          cell.classList.add(robotDirection.toLowerCase());
        }
      }
    }
  }
}
