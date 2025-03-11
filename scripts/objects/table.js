export default class Table {
  constructor() {
    this.uuid = crypto.randomUUID();
    this.xLen = 5;
    this.yLen = 5;
  }

  validatePosition(pos) {
    if (
      pos.x < 0 ||
      pos.x > this.xLen - 1 ||
      pos.y < 0 ||
      pos.y > this.yLen - 1
    ) {
      throw new Error("Position is outside of bounds");
    }
  }

  validateObjectIsOnThisSurface(object) {
    if (object.onSurface == null) {
      throw new Error("Not on table");
    }
  }

  //the table is responsivable for drawing itself, not sure if this is good or not.
  draw(containerElement) {
    const yCoords = document.createElement("div");
    yCoords.className = "y-coords";
    for (let i = 0; i < this.yLen; i++) {
      const coord = document.createElement("span");
      coord.textContent = 4 - i;
      yCoords.appendChild(coord);
    }
    containerElement.appendChild(yCoords);

    const xCoords = document.createElement("div");
    xCoords.className = "x-coords";
    for (let i = 0; i < this.xLen; i++) {
      const coord = document.createElement("span");
      coord.textContent = i;
      xCoords.appendChild(coord);
    }
    containerElement.appendChild(xCoords);

    for (let y = this.yLen - 1; y >= 0; y--) {
      for (let x = 0; x < this.yLen; x++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell-${x}-${y}`;
        containerElement.appendChild(cell);
      }
    }
  }
}
