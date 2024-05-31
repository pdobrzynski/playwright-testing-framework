import { ProductsModuleApi } from "@api/productsmodule/ProductsModuleApi";
import { ProductAddDTO } from "@api/productsmodule/dto/ProductAddDTO";
import { DbShop } from "@db/shop/DbShop";
import { APIRequestContext } from "@playwright/test";
import { ProductCategory } from "@shared/enums/ProductsCategory";

export class ProductService {
    constructor(public api: APIRequestContext) {}
    readonly productsModuleApi = new ProductsModuleApi(this.api);
    readonly dbShop = new DbShop();

    async addProduct(category: ProductCategory) {
        const request = new ProductAddDTO();

        request.category = category;
        request.description = '';
        request.name = 'T-Shirt';
        request.price = 19.99;

        return await this.productsModuleApi.postAddProduct(request);
    }
}