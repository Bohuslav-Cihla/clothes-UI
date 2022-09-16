import { ClothesType } from "./clothesType.model";

export interface Product {
    id: string,
    number: number,
    description: string,
    price: number,
    shear: string,
    size: string,
    isSold: boolean,
    createdDate: Date,
    createdBy: string,
    soldDate: Date,
    soldBy: string,
    deletedDate: Date,
    deletedBy: string,
    note: string,
    imageUrl: string,
    clothesType: ClothesType,
    clothesTypeId: string;
    deliveryNoteId: string,
    invoice: string;
}