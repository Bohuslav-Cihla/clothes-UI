import { ClothesType } from "./clothesType.model";

export interface AddProductRequest {
    clothesType: ClothesType,
    number: number,
    description: string,
    price: number,
    shear: string,
    size: string,
    note: string,
    createdDate: string,
    createdBy: string,
    deletedDate: string,
    deletedBy: string,
    updatedDate: string,
    updatedBy: string,
}