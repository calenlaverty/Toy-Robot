"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_handler_1 = require("./commands/input-handler");
const manager_1 = __importDefault(require("./objects/manager"));
const robot_1 = __importDefault(require("./objects/robot"));
const table_1 = __importDefault(require("./objects/table"));
let objectManager;
const addEventListeners = function (outputEl, tableEl) {
    document.getElementById("execute")?.addEventListener("click", () => {
        try {
            //input
            const inputText = document.getElementById("commands")?.value.toUpperCase();
            const inputParts = inputText.split(/[\s,]+/);
            //target objects
            const robotObject = objectManager.getFirstOfObjectType(robot_1.default);
            if (!robotObject) {
                console.error("Robot not found in ObjectManager");
                outputEl.innerHTML += "Error: Robot not found\n";
                return;
            }
            const robotUuid = robotObject.uuid;
            const robot = objectManager.getObject(robotUuid);
            const tableObject = objectManager.getFirstOfObjectType(table_1.default);
            if (!tableObject) {
                console.error("Table not found in ObjectManager");
                outputEl.innerHTML += "Error: Table not found\n";
                return;
            }
            const tableUuid = tableObject.uuid;
            const table = objectManager.getObject(tableUuid);
            const resultOfAction = input_handler_1.InputHandler.process(inputParts, robot, table);
            update(tableEl, robot, table, outputEl, resultOfAction);
        }
        catch (error) {
            console.error("Error processing command:", error);
            outputEl.innerHTML += `Error: ${error.message}\n`;
        }
    });
};
const init = function () {
    objectManager = new manager_1.default();
    const tableEl = document.getElementById("table");
    const outputEl = document.getElementById("output");
    const table = objectManager.createObject("Table");
    objectManager.createObject("Robot");
    addEventListeners(outputEl, tableEl);
    table.draw(tableEl);
};
document.addEventListener("DOMContentLoaded", () => {
    init();
});
const update = function (tableEl, robot, table, outputEl, resultOfAction) {
    outputEl.innerHTML += resultOfAction + "\n";
    tableEl.innerHTML = "";
    table.draw(tableEl, robot.state.position, robot.state.facing);
};
