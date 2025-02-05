export interface ProductInterface {
    _id?: string
    title: string
    ref: string
    tags?: string[]
    type: string
    category?: string
    images:{
        url: string
        alt: string
    }[]
    file?: string
}