import { Page, expect, Locator } from "@playwright/test";

type AriaAttributesSupported = 'selected'|'hidden'|'disabled'

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectToHaveAriaAttributeValue (locator: Locator, label: AriaAttributesSupported, value: string) {
        return await expect(locator).toHaveAttribute(`aria-${label}`, value);
      }

    async clickWaitForResponse(locator: Locator, url: string) {
        const [response] = await Promise.all([
          this.page.waitForResponse(resp => resp.url().includes(url)
            && resp.status() === 200),
          locator.click()
        ]);
      
        return response;
    }
}