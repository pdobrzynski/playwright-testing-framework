import { Locator, Page } from "@playwright/test";

export class CartPageElements {
    protected page: Page;
    protected cartButton: Locator;
    protected cartProductName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.getByRole('button');
        this.cartProductName = page.getByTitle('productName');
    }
}