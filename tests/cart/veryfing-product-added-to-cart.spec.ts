import { ProductDTO } from "@api/productsmodule/dto/ProductsDTO";
import { ProductQueryDTO } from "@db/shop/products/dto/ProductsDTO";
import { DbActions } from "@lib/DbActions";
import { test } from "@lib/TestFixture";
import { ProductCategory } from "@shared/enums/ProductsCategory";
import { Env } from "@shared/utils/env";

/* TESTRAIL TEST CASE:
C7248: Checking if product was added to the cart.

Prerequisites:
User with id 1234 logged in, there is a product in the system in the category ‘CLOTHING’

Steps:
1. Go to Cart
2. Cart displayed valid:
 - product name
 - category CLOTHING
*/

let product: DbActions<ProductQueryDTO>;
let productId: ProductDTO;

test.beforeEach(async ({ baseTest, productService }) => {
    productId = await productService.addProduct(ProductCategory.CLOTHING)
    product = await baseTest.addProductToCustomer(1234, productId.id);
})

test('C7248: Checking if product was added to the cart', async ({ cartPage, cartPageAssertions, page }) => {
    await page.goto(Env.URL);

    await cartPage.clickCartButton();
    await cartPageAssertions.hasProductInCart(product.get('name'));
    await cartPageAssertions.hasProductCategory(ProductCategory.CLOTHING)
});

test.afterEach('Test cleanup data', async ({ productsModuleApi }) => {
    await productsModuleApi.deleteProducts(product.get('id'))
});