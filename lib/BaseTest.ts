import { DbShop } from "@db/shop/DbShop";
import { APIRequestContext } from "@playwright/test";
import { CustomerService } from "@shared/testdata/customer/CustomerService";
import { ProductService } from "@shared/testdata/product/ProductService";

export class BaseTest {
    constructor(public api: APIRequestContext) {}

    readonly dbShop = new DbShop();
    readonly customerService = new CustomerService(this.api);
    readonly productService = new ProductService(this.api)

    async addProductToCustomer(customerId: number, productId: number) {
        const response = await this.customerService.addProductToCustomer(customerId, productId);
        return await this.dbShop.productsDao.findProductById(response.products[0].productId);
    }
}