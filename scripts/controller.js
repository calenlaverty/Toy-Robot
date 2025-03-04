import table from "./table.js";
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const place = function (object, xpos, ypos, dir) {
  object.x = clamp(xpos, 0, table.xLen);
  object.y = clamp(ypos, 0, table.yLen);
  object.f = dir;
};

export const move = function (object) {
  const movements = {
    NORTH: () => {
      object.y = clamp(object.y + 1, 0, table.yLen);
    },
    SOUTH: () => {
      object.y = clamp(object.y - 1, 0, table.yLen);
    },
    EAST: () => {
      object.x = clamp(object.x + 1, 0, table.xLen);
    },
    WEST: () => {
      object.x = clamp(object.x - 1, 0, table.xLen);
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
