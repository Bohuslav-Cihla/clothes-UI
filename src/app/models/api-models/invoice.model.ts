export interface Invoice {
    id: string,
    number: number,
    createdDate: string,
    createdBy: string;
    dueDate: string;
    dateOfTaxPayment: string;
    isPaid: boolean,
    note: string,
    customer: string
}