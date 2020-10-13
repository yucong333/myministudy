<template>
    <view class="goods">
        <goods-item v-for="(item,index) in cgoods"
        :key="index" :cgoodsitem=item
        class="goods-item">
        </goods-item>
    </view>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    name:'Goods',
    components:{
        GoodsItem
    },
    props:{
        cgoods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding-top: 20rpx;
}
.goods-item{
    width: 48%;
    text-align: center;
    border: 1rpx solid red;
    border-radius: 10rpx;
    margin-bottom: 20rpx;
}
</style>