/**
 * Book model
 */
export interface Books {
    tabId?: string,
    books: Book[]
}
export interface Book {
    id: number,
    sku: string,
    name: string,
    description: string,
    unitPrice: number,
    imageUrl: string,
    active: boolean,
    unitsInStock: number,
    createdOn: Date,
    updatedOn: Date
}