import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/homePage.page";

test.describe("Home Page Tests", () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goToHomePage();
        await homePage.acceptCookiesIfVisible()
    });

    test("Header is visible on home page", async ({ page }) => {
        const isVisible = await homePage.isHeaderVisible();
        expect(isVisible).toBeTruthy();
    });

    test("Click on 'Signup / Login' button", async ({ page }) => {
        await homePage.gotoSignUpPage();
    });
});
