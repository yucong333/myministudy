<template>
    <view class="recommend">
        <view v-for="(item,index) in crecommend"
         :key="index"
         class="recommend-item">
            <image :src="item.image"></image>
            <text>{{item.title}}</text>
        </view>
    </view>
</template>

<script>
export default {
    name:'Recommend',
    props:{
        crecommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    padding: 5px 0 5px;
}
.recommend-item{
    flex: 1;
    text-align: center;
}
.recommend-item image{
    width: 180rpx;
    height: 180rpx;
}
</style>