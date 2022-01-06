interface requestType {
    id: string
    title: string
    condition: string
    thumbnail: string
    accepts_mercadopago: boolean
    available_quantity: string
    sold_quantity: string
    plain_text: string
    price: string
    currency_id: string
    decimals: string
    address: object
}

export type {
    requestType
}