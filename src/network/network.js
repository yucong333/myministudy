export default function(options) {
    return new Promise((reslove, reject) => {
        wx.request({
            url: options.url,
            method: options.method || 'get',
            data: options.data || {},
            success: reslove,
            fail: reject
        })
    })

}