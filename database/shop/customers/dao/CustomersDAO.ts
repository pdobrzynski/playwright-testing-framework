import { DbActions } from "@lib/DbActions";
import { CustomerDTO } from "../dto/CustomersDTO";

export class CustomersDAO<T> extends DbActions<T> {
    constructor(knexConfig: any) {
        super([], knexConfig);
    }

    async findCustomerById(id: number) {
        return await this.executyPostgressQuery(`SELECT * FROM customers WHERE customer_id = ${id}`, CustomerDTO)
    }

    async updateCustomer(id: number, email: string) {
        await this.executyPostgressQuery(`UPDATE customers SET email = '${email}' WHERE customer_id = ${id};`, CustomerDTO)
    }

    async deleteCustomer(id: number) {
        await this.executyPostgressQuery(`DELETE FROM customers WHERE customer_id = ${id};`, CustomerDTO)
    }
}