directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class table {
  constructor() {
    this.length = 5;
    this.width = 5;
  }
}

class placeRobot {
  static process(robot) {
    console.log("Place" + robot);
  }
}

class moveRobot {
  static process(robot) {
    console.log("Move" + robot);
  }
}

class rotateRobot {
  static process(robot) {
    console.log("Rotate" + robot);
  }
}

class reportRobotPosition {
  static process(robot) {
    console.log(`x: ${robot.x}, y: ${robot.y}, f: ${robot.f}`);
  }
}

class robotActionRouter {
  constructor() {
    this.process = process;
  }
  static process(action, robot) {
    action.process(robot);
  }
}

class robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.f = "NORTH";
  }

  processAction() {}
}

const robot1 = new robot();

robotActionRouter.process(placeRobot, robot1);
robotActionRouter.process(moveRobot, robot1);
robotActionRouter.process(rotateRobot, robot1);
robotActionRouter.process(reportRobotPosition, robot1);
