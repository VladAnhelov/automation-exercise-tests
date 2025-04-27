import { Page } from "@playwright/test";
import { homePageLocators } from "../locators/homePage.locators";

export class HomePage {
    private locators = new homePageLocators();

    constructor(private page: Page) {}

    async goToHomePage() {
        await this.page.goto("https://www.automationexercise.com/");
    }

    async isHeaderVisible() {
        return this.page.locator(this.locators.header).isVisible();
    }

    async acceptCookiesIfVisible() {
        const consentOverlay = this.page.locator(this.locators.dialogContent);
        if (await consentOverlay.isVisible()) {
            const acceptButton = this.page.locator(this.locators.dialogContentButton);
            await acceptButton.click();
        }
    }

    async gotoSignUpPage() {
        await this.page.locator(this.locators.signUp).click();
    }
}
