import { InputHandler } from "./commands/input-handler.js";
import ObjectManager from "./objects/manager.js";

const addEventListeners = function (outputEl, tableEl, objectManager) {
  document.getElementById("execute").addEventListener("click", () => {
    //input
    const inputText = document.getElementById("commands").value.toUpperCase();
    const inputParts = inputText.split(/[\s,]+/);

    //target objects
    const robotUuid = objectManager.getFirstOfObjectType("Robot").uuid;
    const robot = objectManager.getObject(robotUuid);
    const tableUuid = objectManager.getFirstOfObjectType("Table").uuid;
    const table = objectManager.getObject(tableUuid);

    const resultOfAction = InputHandler.process(inputParts, robot, table);
    update(tableEl, robot, table, outputEl, resultOfAction);
  });
};

const init = function () {
  const objectManager = new ObjectManager();
  const tableEl = document.getElementById("table");
  const outputEl = document.getElementById("output");
  const table = objectManager.createObject("Table");
  const robot = objectManager.createObject("Robot");

  addEventListeners(outputEl, tableEl, objectManager);
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
