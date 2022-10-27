export interface UpdateProductRequest {


    description: string,
    price: number,
    shear: string,
    size: string,
    isSold: boolean,
    soldDate: string,
    soldBy: string,
    deletedDate: string,
    deletedBy: string,
    note: string,
    imageUrl: string,
    clothesTypeId: string,
    deliveryNoteId: string,
    invoiceId: string,
}