import { BaseApi } from "@lib/BaseApi";
import { ProductDTO } from "./dto/ProductsDTO";
import { ProductUpdateDTO } from "./dto/ProductUpdateDTO";
import { ProductAddDTO } from "./dto/ProductAddDTO";

export class ProductsModuleApi extends BaseApi {
    async getProducts(): Promise<ProductDTO> {
        const response = await this.get('/products', 200);
        const jsonResponse: ProductDTO = await response.json();
        return jsonResponse;
    }

    async postAddProduct(productRequest: ProductAddDTO) {
        const response = await this.post('/products', 204, productRequest);
        const jsonResponse: ProductDTO = await response.json();
        return jsonResponse;
    }

    async putProducts(id: number, productsRequest: ProductUpdateDTO) {
        await this.put(`/products`, productsRequest , 204);
    }

    async deleteProducts(id: number) {
        await this.delete(`/products/${id}`, 204);
    }
}