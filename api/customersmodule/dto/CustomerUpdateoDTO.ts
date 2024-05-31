import { ItemDTO } from "./ItemDTO";

export class CustomerUpdateDTO {
    customerId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    products: ItemDTO[];
}