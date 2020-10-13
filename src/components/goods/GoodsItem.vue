<template>
        <view class="goods-item-text" @tap="itemclick">
            <image :src="cgoodsitem.show.img"></image>
            <view class="itemtitle">{{cgoodsitem.title}}</view>
            <text class="price">￥{{cgoodsitem.price}}</text>
            <image class="collect" src="../../static/goods/collect.png"></image>
            <text class="cfav">{{cgoodsitem.cfav}}</text>
        </view>
</template>

<script>
export default {
    name:'GoodsItem',
    props:{
        cgoodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        itemclick(e){
            const iid = this.cgoodsitem.iid
            wx.navigateTo({
                url: '/pages/detail/Detail?iid='+iid
            })
            console.log(iid)
        }
    }
}
</script>

<style scoped>
.goods-item-text{
    font-size: 15px;
}
.goods-item-text image{
    width: 100%;
    border-radius: 10rpx;
}
.itemtitle{
    overflow:hidden;
    white-space: nowrap;
    color: #ff699c;
}
.goods-item-text .collect{
    height: 36rpx;
    width: 36rpx;
}
.price{
    color: red;
}
.cfav{
    color: #ff699c;
}
</style>