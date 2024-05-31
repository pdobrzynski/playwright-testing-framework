import { Page } from "@playwright/test";

export class GetBy {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getByInputName(value: string) {
        return this.page.locator(`//label[.="${value}"]/following-sibling::div//input`);
    }
}