<template>
    <view id="detail-info">
        <view class="header">
            <view class="start"></view>
            <view class="cdetail-desc">{{cdetail.desc}}</view>
            <view class="end"></view>
        </view>
        
        <view v-for="(item,index) in cdetail.detailImage"
        :key="index" class="content">
            <view class="item-key">{{item.key}}</view>
            <view class="item-list">
                <image v-for="(item,index) in item.list" :key="index"
                 :src="item"
                 mode="widthFix">
                </image>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name:'DetailInfo',
    props:{
        cdetail:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.item-list image{
    width: 100%;
}
 
</style>