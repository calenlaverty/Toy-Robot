import { test, expect } from "@playwright/test";
import { RobotPage } from "../pages/robot.spec";

test.describe("Robot movement tests", () => {
  let robotPage: RobotPage;

  test.beforeEach("Go to site", async ({ page }) => {
    robotPage = new RobotPage(page);
    await robotPage.goto();
  });

  test("Place", async () => {
    await robotPage.executeCommand("PLACE 2,2,NORTH");
    expect(await robotPage.getRobotPosition()).toContain("2,2");
  });

  test("Move North", async () => {
    await robotPage.executeCommand("PLACE 2,2,NORTH");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("2,3");
  });

  test("Move Right", async () => {
    await robotPage.executeCommand("PLACE 2,2,NORTH");
    await robotPage.executeCommand("RIGHT");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("3,2");
  });

  test("Move Left", async () => {
    await robotPage.executeCommand("PLACE 2,2,NORTH");
    await robotPage.executeCommand("LEFT");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("1,2");
  });

  test("Move Down", async () => {
    await robotPage.executeCommand("PLACE 2,2,NORTH");
    await robotPage.executeCommand("LEFT");
    await robotPage.executeCommand("LEFT");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("2,1");
  });
});
