import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/homePage.page";
import { LoginPage } from "./pages/loginPage.page";

test.describe("Login Page Tests", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        await homePage.goToHomePage();
        await homePage.acceptCookiesIfVisible();
        await homePage.gotoSignUpPage()
    });


    test("Fill name & email", async ({ page }) => {
        await loginPage.fillNameAndEmail("TestUser", "testuser@example.com")
      //  await loginPage.clickSignUpButton()
    });
});
