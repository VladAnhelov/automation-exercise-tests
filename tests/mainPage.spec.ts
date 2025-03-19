import {test, expect} from "@playwright/test";
import {mainPageLocators} from "./mainPageLocators.comp";

const locators = new mainPageLocators();
const BASE_URL = "https://www.automationexercise.com/";

test("basic test", async ({page}) => {
    await page.goto(BASE_URL)
    const headerLocator = page.locator(locators.header)
    await expect(headerLocator).toBeVisible()
})
