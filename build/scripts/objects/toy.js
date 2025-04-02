"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Toy {
    constructor(uuid = crypto.randomUUID(), state = {
        position: { x: 0, y: 0 },
        facing: "NORTH",
        onSurface: undefined,
    }) {
        this.uuid = uuid;
        this.state = state;
    }
    move(surface) {
        throw new Error("Move not yet implemented");
    }
    rotate(dir, surface) {
        throw new Error("Rotate not yet implemented");
    }
    place(position, dir, surface) {
        throw new Error("Place not yet implemented");
    }
}
exports.default = Toy;
