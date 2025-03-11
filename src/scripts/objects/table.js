export default class Table {
  constructor() {
    try {
      this.uuid = crypto.randomUUID();
    } catch (e) {
      this.uuid =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      console.log("Using fallback UUID generation");
    }
    (this.type = "Table"), (this.xLen = 5), (this.yLen = 5);
  }

  //can be called to check if the given position is valid on this table (could be relevant if we had tables of different size, or if there were obstracles on the table)
  validatePosition(pos) {
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
  validateObjectIsOnThisSurface(object) {
    if (object.onSurface == null) {
      throw new Error("Not on table");
    }
  }

  //the table is responsible for drawing itself, not sure if this is good or not since it entangles data and teh data object
  draw(tableEl, robotPosition, robotDirection) {
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
