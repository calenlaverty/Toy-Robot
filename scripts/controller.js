import { InputHandler } from "./commands/input-handler.js";
import ObjectManager from "./objects/manager.js";

const addEventListeners = function (outputEl) {
  document.getElementById("execute").addEventListener("click", () => {
    //input
    const inputText = document.getElementById("commands").value;
    const inputParts = inputText.split(/[\s,]+/);
    outputEl.innerHTML = "";

    //target objects
    const robotUuid = ObjectManager.getFirstOfObjectType("Robot").uuid;
    const robot = ObjectManager.getObject(robotUuid);
    const tableUuid = ObjectManager.getFirstOfObjectType("Table").uuid;
    const table = ObjectManager.getObject(tableUuid);
    InputHandler.process(inputParts, robot, table);

    update();
  });
};

const init = function () {
  const tableEl = document.getElementById("table");
  const outputEl = document.getElementById("output");
  const table = ObjectManager.createObject("Table");
  const robot = ObjectManager.createObject("Robot");

  addEventListeners(outputEl);
  table.draw(tableEl);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

const update = function () {
  console.log("Updating...");
};
