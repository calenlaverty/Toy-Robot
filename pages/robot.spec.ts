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
    await this.page.goto("/");
  }

  async executeCommand(command: string) {
    await this.commandBox.fill(command);
    await this.executeButton.click();
    await this.page.waitForTimeout(300);
  }

  async getRobotPosition() {
    return await this.page.locator(".robot").textContent();
  }

  async getMostRecentOutput(): Promise<string> {
    const text = (await this.outputBox.textContent()) || "";
    const firstLine = text.split("\n")[0];
    const parts = firstLine.split(" - ");
    return parts.length > 1 ? parts[1] : firstLine;
  }
}
