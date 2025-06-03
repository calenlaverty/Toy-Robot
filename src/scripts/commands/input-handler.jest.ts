// import {
//   InputHandler,
//   validateDirection,
//   validateRobotExists,
// } from "./input-handler";

// import Robot from "../objects/robot";
// import { DirectionType } from "../utils/types";

// describe("Input handler validation functions", () => {
//   test("validateDirection() - DOes not error when provided correct direction", () => {
//     expect(() => validateDirection("NORTH")).not.toThrow();
//     expect(() => validateDirection("SOUTH")).not.toThrow();
//     expect(() => validateDirection("EAST")).not.toThrow();
//     expect(() => validateDirection("WEST")).not.toThrow();
//   });

//   test("validateDirection() - Returns an error if no proper direction specified", () => {
//     expect(() => validateDirection("FAKE" as DirectionType)).toThrow(
//       "Command is not valid."
//     );
//   });

//   test("validateRobotExists() - Throw an error when no robot exists", () => {
//     expect(() => validateRobotExists(null)).toThrow(
//       "Robot does not exist; use the PLACE commands to create the Robot."
//     );
//   });

//   test("validateRobotExists() - Does not error when a robot exists", () => {
//     expect(() => validateRobotExists(new Robot())).not.toThrow();
//   });
// });

// describe("Input handler class functions", () => {
//   test("Invalid input command", () => {
//     expect(InputHandler.process(["TEST"], new Robot())).toEqual(
//       expect.objectContaining({
//         message: "Not a valid command",
//         robot: expect.any(Robot),
//       })
//     );
//   });
// });

// describe("process() - ROTATION function", () => {
//   test("process() - ROTATE - No Robot", () => {
//     expect(() => InputHandler.process(["RIGHT"], null)).toThrow();
//     expect(() => InputHandler.process(["LEFT"], null)).toThrow();
//   });

//   test("process() - ROTATE - Has Robot", () => {
//     expect(InputHandler.process(["RIGHT"], new Robot())).toEqual(
//       expect.objectContaining({
//         message: "Rotated right",
//         robot: expect.objectContaining({
//           state: expect.objectContaining({ facing: "EAST" }),
//         }),
//       })
//     );
//   });
// });

// describe("process() - PLACE function", () => {
//   test("process() - PLACE - With robot", () => {
//     expect(
//       InputHandler.process(["PLACE", "1", "1", "NORTH"], new Robot())
//     ).toEqual(
//       expect.objectContaining({
//         robot: expect.objectContaining({
//           state: expect.objectContaining({ position: { x: 1, y: 1 } }),
//         }),
//       })
//     );
//   });

//   test("process() - PLACE - With no robot", () => {
//     expect(InputHandler.process(["PLACE", "1", "1", "NORTH"], null)).toEqual(
//       expect.objectContaining({
//         robot: expect.objectContaining({
//           state: expect.objectContaining({ position: { x: 1, y: 1 } }),
//         }),
//       })
//     );
//   });

//   test("process() - PLACE - With no robot", () => {
//     expect(() =>
//       InputHandler.process(["PLACE", "1", "1", "TEST"], null)
//     ).toThrow();
//   });

//   test("process() - MOVE", () => {
//     expect(InputHandler.process(["MOVE"], new Robot())).toEqual(
//       expect.objectContaining({
//         robot: expect.objectContaining({
//           state: expect.objectContaining({ position: { x: 0, y: 1 } }),
//         }),
//       })
//     );
//   });

//   test("process() - MOVE - With no robot", () => {
//     expect(() => InputHandler.process(["MOVE"], null)).toThrow();
//   });

//   test("process() - REPORT", () => {
//     expect(() => InputHandler.process(["REPORT"], null)).toThrow();
//   });

//   test("process() - REPORT", () => {
//     expect(() => InputHandler.process(["REPORT"], new Robot())).not.toThrow();
//   });

//   test("process() - Invalid Command - no robot", () => {
//     expect(InputHandler.process(["TEST"], null)).toEqual(
//       expect.objectContaining({
//         message:
//           "Error: Robot does not exist; use the PLACE commands to create the Robot.",
//       })
//     );
//   });
// });
