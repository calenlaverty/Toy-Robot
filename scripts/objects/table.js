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
}

export default new Table();
