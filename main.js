import table from "./scripts/objects/table.js";
import robot from "./scripts/objects/robot.js";
import {
  PlaceService,
  MoveService,
  RotationService,
} from "./scripts/commands/movements.js";
import { ReportService } from "./scripts/commands/report.js";

const executeCommands = function (commandLines) {
  console.log(commandLines);
};

const addEventListeners = function (outputEl) {
  document.getElementById("execute").addEventListener("click", () => {
    const commandsText = document.getElementById("commands").value;
    const commandLines = commandsText
      .split("\n")
      .filter((line) => line.trim() !== "");

    outputEl.innerHTML = "";
    executeCommands(commandLines);
  });
};

const init = function () {
  const tableEl = document.getElementById("table");
  const outputEl = document.getElementById("output");
  addEventListeners(outputEl);
  table.draw(tableEl);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

//Actions
let robotState = robot;
robotState = PlaceService.apply(robotState, { x: 1, y: 2 }, "NORTH", table);
ReportService.apply(robotState);

robotState = RotationService.apply(robotState, "LEFT");
ReportService.apply(robotState);
robotState = RotationService.apply(robotState, "LEFT");
ReportService.apply(robotState);

robotState = MoveService.apply(robotState);
ReportService.apply(robotState);
robotState = MoveService.apply(robotState);
ReportService.apply(robotState);
