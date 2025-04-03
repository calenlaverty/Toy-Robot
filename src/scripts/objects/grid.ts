import { Coordinate, DirectionType } from "../utils/types";

export default class Grid {
  constructor(public xLen = 5, public yLen = 5) {}

  validatePosition(pos: Coordinate) {
    if (
      pos.x < 0 ||
      pos.x > this.xLen - 1 ||
      pos.y < 0 ||
      pos.y > this.yLen - 1
    ) {
      throw new Error("Position is not valid");
    }
  }

  render(
    GridEl: HTMLTableElement,
    robotPosition: Coordinate,
    robotDirection: DirectionType
  ) {
    for (let y = this.yLen - 1; y >= 0; y--) {
      for (let x = 0; x < this.yLen; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = `${x},${y}`;
        GridEl.appendChild(cell);
        if (robotPosition && robotPosition.x === x && robotPosition.y === y) {
          cell.classList.add("robot");
          cell.classList.add(robotDirection.toLowerCase());
        }
      }
    }
  }
}
