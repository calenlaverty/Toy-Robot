export const place = function (object, xpos, ypos, dir) {
  object.x = xpos;
  object.y = ypos;
  object.f = dir;
};

export const move = function (object) {
  const movements = {
    NORTH: () => {
      object.y += 1;
    },
    SOUTH: () => {
      object.y -= 1;
    },
    EAST: () => {
      object.x += 1;
    },
    WEST: () => {
      object.x -= 1;
    },
  };

  movements[object.f]();
};

export const rotate = (object, dir) => {
  const dirs = ["NORTH", "EAST", "SOUTH", "WEST"];
  const step = dir === "RIGHT" ? 1 : -1;
  const newIndex = (dirs.indexOf(object.f) + step + 4) % 4;
  object.f = dirs[newIndex];
};

export const report = function (object) {
  console.log(`x: ${object.x}, y: ${object.y}, f: ${object.f}`);
};
