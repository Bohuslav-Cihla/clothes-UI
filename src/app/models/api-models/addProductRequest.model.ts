import { ClothesType } from "./clothesType.model";

export interface AddProductRequest {
    clothesTypeId: string,
    description: string,
    price: number,
    shear: string,
    size: string,
    note: string,
}