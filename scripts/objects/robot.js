class Robot {
  constructor(x = 0, y = 0, f = "NORTH") {
    this.x = x;
    this.y = y;
    this.facing = f;
  }
}

export default new Robot();
