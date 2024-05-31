import { Page } from "@playwright/test";
import { CartPageElements } from "./elements/CartPageElements";

export class CartDetailsPage extends CartPageElements {
    constructor(page: Page) {
        super(page);
    }
    
    async clickCartButton() {
        await this.cartButton.click();
    }
}