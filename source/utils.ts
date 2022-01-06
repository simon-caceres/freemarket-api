const BASEURL: string = 'https://api.mercadolibre.com';
import { requestType } from "./types";

const firma = {
    name: 'Simon',
    lastname: 'Caceres',
}

const CONSTRUCTINGDATA = (data: any) => {
    let result: any = {};
    result.autor = firma;
    result.items = data.results.map((item: requestType) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: item.decimals,
            },
            condition: item.condition,
            picture: item.thumbnail,
            free_shipping: item.accepts_mercadopago,
            address: item.address
        }
    })
    return result;
}

const COUNTRUCTINGDESCDATA = (item: requestType) => {
    let result: any = {};
    result.autor = firma;
    result.item =  {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: item.decimals,
            },
            condition: item.condition,
            picture: item.thumbnail,
            free_shipping: item.accepts_mercadopago,
            available_quantity: item.available_quantity,
            sold_quantity: item.sold_quantity,
            description: item.plain_text,
    }
    return result;
}

export {
    BASEURL,
    CONSTRUCTINGDATA,
    COUNTRUCTINGDESCDATA,
};