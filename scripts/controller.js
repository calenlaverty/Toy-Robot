export const place = function (robot, xpos, ypos, dir) {
  robot.x = xpos;
  robot.y = ypos;
  robot.f = dir;
};

export const move = function (robot) {
  const movements = {
    NORTH: () => {
      robot.y += 1;
    },
    SOUTH: () => {
      robot.y -= 1;
    },
    EAST: () => {
      robot.x += 1;
    },
    WEST: () => {
      robot.x -= 1;
    },
  };

  movements[robot.f]();
};

export const rotate = (robot, dir) => {
  const dirs = ["NORTH", "EAST", "SOUTH", "WEST"];
  const step = dir === "RIGHT" ? 1 : -1;
  const newIndex = (dirs.indexOf(robot.f) + step + 4) % 4;
  robot.f = dirs[newIndex];
};

export const report = function (robot) {
  console.log(`x: ${robot.x}, y: ${robot.y}, f: ${robot.f}`);
};
