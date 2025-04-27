import {Page} from "@playwright/test";
import {loginPageLocators} from "../locators/loginPage.locators";

export class LoginPage {
    private locators = new loginPageLocators()

    constructor(private page: Page) {}

    async gotoSignInPage() {
        await this.page.goto("https://www.automationexercise.com/signup");

    }

    async fillNameAndEmail(name: string, email: string) {
        await this.page.fill(this.locators.signUpInputName, name)
        await this.page.fill(this.locators.signUpInputEmail, email)
    }

    async clickSignUpButton() {
        await this.page.locator(this.locators.signUpButton).click()
    }
}