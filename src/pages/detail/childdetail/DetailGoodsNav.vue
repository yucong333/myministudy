<template>
    <view class="detail-goods-nav">
        <view class="nav-left nav-item">
             <view class="itemnav">
                <view class="icon"><image src="../../../static/goodsnav/service.png"></image></view>
                <text>客服</text>
            </view>
            <view class="itemnav">
                <view class="icon"><image src="../../../static/goodsnav/shop.png"></image></view>
                <text>店铺</text>
            </view>
            <view class="itemnav">
                <view class="icon"><image src="../../../static/goodsnav/collect.png"></image></view>
                <text>收藏</text>
            </view>
        </view>
        <view class="nav-right nav-item">
            <view class="itemtext itemtext-yellow"
            @click="addcart">
                <text>加入购物车</text>
            </view>
            <view class="itemtext">
                <text>购买</text>
            </view>
        </view>
            
    </view>
</template>

<script>
export default {
    name:'DetailGoodsNav',
    methods:{
        addcart(){
            this.$emit('addtocart')
        }
    }
}
</script>

<style scoped>
.detail-goods-nav{
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120rpx;
    display: flex;
    border-top:2rpx solid #ffffff;
}
.nav-item{
    flex: 1;
    display: flex;
}
.itemnav{
    flex: 1;
    background-color: white;
}
.itemtext{
    flex: 1;
    background-color:salmon;
}
.itemtext-yellow{
    background-color:yellow;
}
.nav-right{
    text-align: center;
    line-height: 120rpx;
    font-size: 34rpx;
}
.nav-left{
    text-align: center;
    font-size: 28rpx;
}
.itemnav image{
    height: 55rpx;
    width:55rpx;
    
}
</style>