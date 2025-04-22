import { test, expect } from "@playwright/test";
import { RobotPage } from "../pages/robot.spec";

test.describe("Robot movement tests", () => {
  let robotPage: RobotPage;

  test.beforeEach("Go to site", async ({ page }) => {
    robotPage = new RobotPage(page);
    await robotPage.goto();
  });

  test("Initial place", async ({ page }) => {
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    expect(await robotPage.getRobotPosition()).toContain("0,0");
  });

  test("Move", async ({ page }) => {
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    expect(await robotPage.getRobotPosition()).toContain("0,0");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,1");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,2");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,3");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,4");
    expect(await robotPage.getRobotPosition()).toContain("0,4");
  });

  test("GetOutput", async ({ page }) => {
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    await robotPage.executeCommand("PLACE 0,0,NORTH");
    expect(await robotPage.getRobotPosition()).toContain("0,0");
    const result = await robotPage.getMostRecentOutput();
    console.log(result);
  });
});
