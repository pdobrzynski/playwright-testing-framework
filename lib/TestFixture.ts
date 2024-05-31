import { test as base } from '@playwright/test';
import { BaseTest } from './BaseTest';
import { CustomersModuleApi } from '@api/customersmodule/CustomersModuleApi';
import { ProductsModuleApi } from '@api/productsmodule/ProductsModuleApi';
import { DbShop } from '@db/shop/DbShop';
import { CustomerService } from '@shared/testdata/customer/CustomerService';
import { CartPageAssertions } from '@pages/cart/assertions/CartPageAssertions';
import { CartDetailsPage } from '@pages/cart/CartDetailsPage';
import { ProductService } from '@shared/testdata/product/ProductService';

type Pages = {
    cartPage: CartDetailsPage
}

type Apis = {
    customerModuleApi: CustomersModuleApi,
    productsModuleApi: ProductsModuleApi
}

type Assertions = {
    cartPageAssertions: CartPageAssertions
}

type Daos = {
    dbShop: DbShop
}

type Services = {
    customerService: CustomerService,
    productService: ProductService,
    baseTest: BaseTest
}

type Modules = 
& Pages 
& Apis
& Assertions
& Daos
& Services;

export const test = base.extend<Modules>({
    baseTest: async ({ request }, use) => {
        await use(new BaseTest(request))
    },
    cartPage: async ({ page }, use) => {
        await use(new CartDetailsPage(page));
    },
    productsModuleApi: async ({ request }, use) => {
        await use(new ProductsModuleApi(request))
    },
    cartPageAssertions: async ({ page }, use) => {
        await use(new CartPageAssertions(page))
    },
    customerModuleApi: async({ request }, use) => {
        await use(new CustomersModuleApi(request));
    },
    customerService: async({ request }, use) => {
        await use(new CustomerService(request))
    },
    productService: async({ request }, use) => {
        await use(new ProductService(request))
    },
    dbShop: async ({ }, use) => {
        await use(new DbShop())
    },
});

export { expect } from '@playwright/test';