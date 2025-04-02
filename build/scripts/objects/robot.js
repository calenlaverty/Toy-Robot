"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toy_js_1 = __importDefault(require("./toy.js"));
const helpers_1 = require("../utils/helpers");
class Robot extends toy_js_1.default {
    constructor() {
        super();
    }
    getState() {
        return { ...this.state };
    }
    setState(newState) {
        this.state = newState;
    }
    place(position, dir, surface) {
        try {
            this.validateDirection(dir);
            surface.validatePosition(position);
            this.setState({
                ...this.getState(),
                position,
                facing: dir,
                onSurface: surface,
            });
            return `Placed Robot at x:${position.x}, y:${position.y}, facing ${dir.toLowerCase()}`;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    move(surface) {
        try {
            const currentState = this.getState();
            surface.validateObjectIsOnThisSurface(currentState);
            const movement = helpers_1.MOVEMENT_MAP[currentState.facing];
            const axis = movement.axis;
            const newPosition = currentState.position[axis] + movement.delta;
            currentState.onSurface.validatePosition({
                currentState,
                [movement.axis]: newPosition,
            });
            const newState = {
                ...currentState,
                position: {
                    ...currentState.position,
                    [movement.axis]: newPosition,
                },
            };
            this.setState(newState);
            return `Moved ${currentState.facing?.toLowerCase() || ""}; New position is x:${newState.position.x}, y:${newState.position.y}`;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    rotate(dir, surface) {
        try {
            const currentState = this.getState();
            surface.validateObjectIsOnThisSurface(currentState);
            this.validateRotation(dir);
            const rotationStep = dir === "RIGHT" ? 1 : -1;
            const newDirectionIndex = (helpers_1.CARDINAL_DIRECTIONS.indexOf(currentState.facing || "") +
                rotationStep +
                helpers_1.CARDINAL_DIRECTIONS.length) %
                helpers_1.CARDINAL_DIRECTIONS.length;
            this.setState({
                ...currentState,
                facing: helpers_1.CARDINAL_DIRECTIONS[newDirectionIndex],
            });
            return `Rotated ${dir.toLowerCase()}`;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    validateDirection(dir) {
        if (!helpers_1.CARDINAL_DIRECTIONS.includes(dir)) {
            throw new Error("Invalid direction");
        }
    }
    validateRotation(dir) {
        if (!helpers_1.ALLOWED_ROTATIONS.includes(dir)) {
            throw new Error("Invalid direction");
        }
    }
}
exports.default = Robot;
