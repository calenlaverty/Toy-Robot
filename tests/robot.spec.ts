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
    expect(await robotPage.getMostRecentOutput()).toContain("x:0, y:0");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:0, y:1");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:0, y:2");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:0, y:3");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:0, y:4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getRobotPosition()).toContain("0,4");
    await robotPage.executeCommand("RIGHT");
    expect(await robotPage.getMostRecentOutput()).toContain("Rotated right");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:1, y:4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:2, y:4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:3, y:4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain("x:4, y:4");
    await robotPage.executeCommand("MOVE");
    expect(await robotPage.getMostRecentOutput()).toContain(
      "Error: Position is not valid"
    );
  });
});
