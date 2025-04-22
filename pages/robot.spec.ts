import { Page, Locator, expect } from "@playwright/test";

export class RobotPage {
  readonly page: Page;
  readonly executeButton: Locator;
  readonly commandBox: Locator;
  readonly outputBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.executeButton = page.locator("#execute");
    this.commandBox = page.locator("#commands");
    this.outputBox = page.locator(".output");
  }

  async goto() {
    await this.page.goto("localhost:1234");
  }

  async executeCommand(command: string) {
    await this.commandBox.fill(command);
    await this.executeButton.click();
    await this.page.waitForTimeout(300);
  }

  async getRobotPosition() {
    return await this.page.locator(".robot").textContent();
  }

  async getMostRecentOutput() {
    const stringOutput = await this.outputBox.textContent();
    const endOfLine = stringOutput?.indexOf("\n");
    let result = stringOutput?.slice(0, endOfLine ?? 0);
    const endOfDateTime = stringOutput?.indexOf(" - ");
    // result = result?.slice(endOfDateTime) + 3;
    return result;
  }
}
