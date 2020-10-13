import request from './network'

const baseURL = "http://152.136.185.210:8000/api/w6"

export function getdetailid(iid) {
    return request({
        url: baseURL + '/detail',
        data: {
            iid
        }
    })
}
export class Goods {
    constructor(columns, itemInfo) {
        this.desc = itemInfo.desc;
        this.title = itemInfo.title;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.services = shopInfo.services;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells
        this.goods = shopInfo.cGoods
    }
}