import { ClothesType } from "./clothesType.model";
import { Invoice } from "./invoice.model";

export interface Product {
    id: string,
    number: number,
    description: string,
    price: number,
    shear: string,
    size: string,
    isSold: boolean,
    createdDate: string,
    createdBy: string,
    soldDate: string,
    soldBy: string,
    deletedDate: string,
    deletedBy: string,
    note: string,
    imageUrl: string,
    clothesType: ClothesType,
    clothesTypeId: string;
    deliveryNoteId: string,
    invoice: Invoice;
}