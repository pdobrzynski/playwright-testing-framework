import { CustomersModuleApi } from "@api/customersmodule/CustomersModuleApi";
import { DbShop } from "@db/shop/DbShop";
import { APIRequestContext } from "@playwright/test";

export class CustomerService {
    constructor(public api: APIRequestContext) {}
    readonly customersModuleApi = new CustomersModuleApi(this.api);
    readonly dbShop = new DbShop();

    async addProductToCustomer(customerId: number, productId: number) {
        return await this.customersModuleApi.postAddProductsToCustomer([productId], customerId);
    }
}