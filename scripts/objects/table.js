class Table {
  constructor() {
    this.xLen = 5;
    this.yLen = 5;
  }

  validatePosition = function (pos) {
    if (pos.x < 0 || pos.x > this.xLen || pos.y < 0 || pos.y > this.yLen) {
      throw new Error("Position is outside of bounds");
    }
  };

  draw = function (containerElement) {
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
  };
}

export default new Table();
