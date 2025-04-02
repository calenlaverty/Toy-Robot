import Robot from "./robot";
export default class Table {
  constructor(
    public uuid = crypto.randomUUID(),
    public xLen = 5,
    public yLen = 5
  ) {}

  validatePosition(pos: { x: number; y: number }) {
    if (
      pos.x < 0 ||
      pos.x > this.xLen - 1 ||
      pos.y < 0 ||
      pos.y > this.yLen - 1
    ) {
      throw new Error("Position is not valid");
    }
  }

  //check if the given object is found on the table
  validateObjectIsOnThisSurface(object: any) {
    if (object.onSurface == null) {
      throw new Error("Not on table");
    }
  }

  //the table is responsible for drawing itself, not sure if this is good or not since it entangles data and teh data object
  draw(
    tableEl: HTMLElement,
    robotPosition: { x: number; y: number },
    robotDirection: string
  ) {
    for (let y = this.yLen - 1; y >= 0; y--) {
      for (let x = 0; x < this.yLen; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = `${x},${y}`;
        tableEl.appendChild(cell);
        if (robotPosition && robotPosition.x === x && robotPosition.y === y) {
          cell.classList.add("robot");
          cell.classList.add(robotDirection.toLowerCase());
        }
      }
    }
  }
}
