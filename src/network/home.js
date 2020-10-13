import request from './network'

const baseURL = "http://152.136.185.210:8000/api/w6"

export function gethomedata() {
    return request({
        url: baseURL + '/home/multidata'
    })
}

export function gethomegoods(type, page) {
    return request({
        url: baseURL + '/home/data',
        data: {
            type,
            page
        }
    })
}