import { DbActions } from "@lib/DbActions";
import { ProductQueryDTO } from "../dto/ProductsDTO";

export class ProductsDAO<T> extends DbActions<T> {
    constructor(knexConfig: any) {
        super([], knexConfig);
    }

    async getAllProducts() {
        return await this.executyPostgressQuery('SELECT * FROM products;', ProductQueryDTO);
    }

    async findProductById(productId: number) {
        return await this.executyPostgressQuery(`SELECT * FROM products WHERE product_id = ${productId}`, ProductQueryDTO);
    }
}