import { InputHandler } from "./commands/input-handler";
import { Coordinate } from "./utils/types";
import Grid from "./objects/grid";
import Robot from "./objects/robot";

let robot: Robot | null;

const addEventListeners = function (
  outputEl: HTMLElement,
  gridEl: HTMLTableElement
) {
  document.getElementById("execute")?.addEventListener("click", () => {
    try {
      let resultOfAction: { message: string; position: Coordinate };
      let message: string, position: Coordinate;
      const inputText = (
        document.getElementById("commands") as HTMLInputElement
      )?.value.toUpperCase();
      const commandParts = inputText.split(/[\s,]+/);
      ({ message, robot } = InputHandler.process(commandParts, robot));
      update(gridEl, robot, outputEl, message);
    } catch (error: any) {
      const dateTime = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      console.error("Error processing command:", error);
      outputEl.innerHTML = `${dateTime} - ${error.message}\n${outputEl.innerHTML}`;
    }
  });
};

const init = function () {
  const gridEl = document.getElementById("grid") as HTMLTableElement;
  const outputEl = document.getElementById("output") as HTMLElement;
  addEventListeners(outputEl, gridEl);
  Grid.render(gridEl);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

const update = function (
  gridEl: HTMLTableElement,
  robot: Robot | null,
  outputEl: HTMLElement,
  resultOfAction: any
) {
  const dateTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  outputEl.innerHTML =
    dateTime + " - " + resultOfAction + "\n" + outputEl.innerHTML;
  gridEl.innerHTML = "";
  Grid.render(gridEl, robot?.state.position, robot?.state.facing);
};
