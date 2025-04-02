"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOVEMENT_MAP = exports.CARDINAL_DIRECTIONS = exports.ALLOWED_ROTATIONS = void 0;
exports.ALLOWED_ROTATIONS = ["LEFT", "RIGHT"];
exports.CARDINAL_DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];
exports.MOVEMENT_MAP = {
    NORTH: { axis: "y", delta: 1 },
    SOUTH: { axis: "y", delta: -1 },
    EAST: { axis: "x", delta: 1 },
    WEST: { axis: "x", delta: -1 },
};
