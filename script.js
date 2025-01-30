directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class table {
  constructor() {
    this.length = 5;
    this.width = 5;
  }
}

class robotActionRouter {
  constructor() {
    this.process = process;
  }
  static process(action, robot, args = null) {
    action.process.call(robot, args);
  }
}

class placeRobot {
  static process(args) {
    console.log("Place");
    this.x = args.x;
    this.y = args.y;
    this.f = args.f;
  }
}

class moveRobot {
  static process() {
    console.log("Move" + robot);
  }
}

class rotateRobot {
  static process() {
    console.log("Rotate" + robot);
  }
}

class reportRobotPosition {
  static process() {
    console.log(`x: ${this.x}, y: ${this.y}, f: ${this.f}`);
  }
}

class robot {
  constructor(x = 0, y = 0, f = "NORTH") {
    this.x = x;
    this.y = y;
    this.f = f;
    this.init();
  }

  init() {
    console.log("Robot is ready.");
  }
}

const robot1 = new robot();

robotActionRouter.process(placeRobot, robot1, { x: 1, y: 2, f: "NORTH" });
// robotActionRouter.process(moveRobot, robot1);
// robotActionRouter.process(rotateRobot, robot1);
robotActionRouter.process(reportRobotPosition, robot1);
