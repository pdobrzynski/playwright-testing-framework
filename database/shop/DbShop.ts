import { Env } from "@shared/utils/env";
import { CustomersDAO } from "./customers/dao/CustomersDAO";
import { ProductsDAO } from "./products/dao/ProductsDAO";

export class DbShop {
    private knexConfig: any;
    productsDao: ProductsDAO<[]>;
    customersDao: CustomersDAO<[]>

    constructor(knexConfig: any = {
        client: 'pg',
            connection: {
                charset: 'utf8',
                timezone: 'UTC',
                user: Env.DB_SHOP_USER,
                password: Env.DB_SHOP_PASSWORD,
                host: Env.DB_SHOP_HOST,
                port: Env.DB_PORT,
                database: Env.DB_SHOP_DATABASE,
            }
    }) {
        this.knexConfig = knexConfig;
        this.productsDao = new ProductsDAO(knexConfig);
        this.customersDao = new CustomersDAO(knexConfig);
    }
}