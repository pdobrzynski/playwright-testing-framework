import { Page, expect } from "@playwright/test";
import { CartDetailsPage } from "../CartDetailsPage";
import { ProductCategory } from "@shared/enums/ProductsCategory";

export class CartPageAssertions extends CartDetailsPage {
    constructor(page: Page) {
        super(page);
    }
    
    async hasProductInCart(productName: string) {
        await expect(this.cartProductName).toHaveValue(productName);
    }

    async hasProductCategory(category: ProductCategory) {
        await expect(this.cartProductName).toHaveAttribute('category', category);
    }
}