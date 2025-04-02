import { InputHandler } from "./commands/input-handler";
import ObjectManager from "./objects/manager";
import Robot from "./objects/robot";
import Table from "./objects/table";

let objectManager: any;

const addEventListeners = function (outputEl: any, tableEl: any) {
  document.getElementById("execute")?.addEventListener("click", () => {
    try {
      //input
      const inputText = (
        document.getElementById("commands") as HTMLInputElement
      )?.value.toUpperCase();
      const inputParts = inputText.split(/[\s,]+/);

      //target objects
      const robotObject = objectManager.getFirstOfObjectType(Robot);
      if (!robotObject) {
        console.error("Robot not found in ObjectManager");
        outputEl.innerHTML += "Error: Robot not found\n";
        return;
      }
      const robotUuid = robotObject.uuid;
      const robot = objectManager.getObject(robotUuid);

      const tableObject = objectManager.getFirstOfObjectType(Table);
      if (!tableObject) {
        console.error("Table not found in ObjectManager");
        outputEl.innerHTML += "Error: Table not found\n";
        return;
      }

      const tableUuid = tableObject.uuid;
      const table = objectManager.getObject(tableUuid);

      const resultOfAction = InputHandler.process(inputParts, robot, table);
      update(tableEl, robot, table, outputEl, resultOfAction);
    } catch (error: any) {
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
  objectManager.createObject("Robot");

  addEventListeners(outputEl, tableEl);
  table.draw(tableEl);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

const update = function (
  tableEl: HTMLElement,
  robot: any,
  table: any,
  outputEl: any,
  resultOfAction: any
) {
  outputEl.innerHTML += resultOfAction + "\n";
  tableEl.innerHTML = "";
  table.draw(tableEl, robot.state.position, robot.state.facing);
};
