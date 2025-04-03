import { InputHandler } from "./commands/input-handler";
import ObjectManager from "./objects/manager";
import Grid from "./objects/grid";
import Robot from "./objects/robot";

let objectManager: ObjectManager;

const addEventListeners = function (
  outputEl: HTMLElement,
  gridEl: HTMLTableElement,
  robot: Robot,
  grid: Grid
) {
  document.getElementById("execute")?.addEventListener("click", () => {
    try {
      const inputText = (
        document.getElementById("commands") as HTMLInputElement
      )?.value.toUpperCase();
      const inputParts = inputText.split(/[\s,]+/);
      const resultOfAction = InputHandler.process(inputParts, robot);
      update(gridEl, robot, grid, outputEl, resultOfAction);
    } catch (error: any) {
      console.error("Error processing command:", error);
      outputEl.innerHTML += `Error: ${error.message}\n`;
    }
  });
};

const init = function () {
  objectManager = new ObjectManager();
  const gridEl = document.getElementById("Grid") as HTMLTableElement;
  const outputEl = document.getElementById("output") as HTMLElement;
  const grid = new Grid();
  const robot = objectManager.createRobot();

  addEventListeners(outputEl, gridEl, robot, grid);
  grid.render(gridEl, robot.state.position, robot.state.facing);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

const update = function (
  gridEl: HTMLTableElement,
  robot: Robot,
  grid: Grid,
  outputEl: HTMLElement,
  resultOfAction: any
) {
  outputEl.innerHTML += resultOfAction + "\n";
  gridEl.innerHTML = "";
  grid.render(gridEl, robot.state.position, robot.state.facing);
};
