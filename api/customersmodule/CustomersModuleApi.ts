import { BaseApi } from "@lib/BaseApi";
import { CustomerUpdateDTO } from "./dto/CustomerUpdateoDTO";

export class CustomersModuleApi extends BaseApi {

    async getCustomerById(id: number) {
        const response = await this.get(`/customer/${id}`, 200)
        const jsonResponse: CustomerUpdateDTO = await response.json();

        return jsonResponse;
    }
    async putCustomerById(id: number, requestBody: CustomerUpdateDTO) {
        await this.put(`/customers/${id}`, requestBody, 200)
    }

    async postAddProductsToCustomer(productsId: number[], customerId: number): Promise<CustomerUpdateDTO> {
        const payload = productsId.map(productId => ({ productId }));
        const response = await this.post(`/customer/${customerId}`, 200, JSON.stringify(payload))
        const jsonResponse: CustomerUpdateDTO = await response.json();

        return jsonResponse;
    }
}