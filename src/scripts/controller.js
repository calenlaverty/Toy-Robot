import { InputHandler } from "./commands/input-handler.js";
import ObjectManager from "./objects/manager.js";

let objectManager;

const addEventListeners = function (outputEl, tableEl) {
  document.getElementById("execute").addEventListener("click", () => {
    try {
      console.log(objectManager.getObjects());
      //input
      const inputText = document.getElementById("commands").value.toUpperCase();
      const inputParts = inputText.split(/[\s,]+/);

      //target objects
      const robotObject = objectManager.getFirstOfObjectType("Robot");
      if (!robotObject) {
        console.error("Robot not found in ObjectManager");
        outputEl.innerHTML += "Error: Robot not found\n";
        return;
      }
      const robotUuid = robotObject.uuid;
      const robot = objectManager.getObject(robotUuid);

      const tableObject = objectManager.getFirstOfObjectType("Table");
      if (!tableObject) {
        console.error("Table not found in ObjectManager");
        outputEl.innerHTML += "Error: Table not found\n";
        return;
      }

      const tableUuid = tableObject.uuid;
      const table = objectManager.getObject(tableUuid);

      const resultOfAction = InputHandler.process(inputParts, robot, table);
      update(tableEl, robot, table, outputEl, resultOfAction);
    } catch (error) {
      console.error("Error processing command:", error);
      outputEl.innerHTML += `Error: ${error.message}\n`;
    }
  });
};

const init = function () {
  objectManager = new ObjectManager();
  const tableEl = document.getElementById("table");
  const outputEl = document.getElementById("output");
  const table = objectManager.createObject("Table");
  const robot = objectManager.createObject("Robot");

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
