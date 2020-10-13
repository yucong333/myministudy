<template>
    <view class="back-top" @click="backtopclick">
        <image src="../../static/backtop/backtop-fill.png"></image>
    </view>
</template>

<script>
export default {
    name:'BackTop',
    methods:{
        backtopclick(){
            wx.pageScrollTo({
                scrollTop:0
            })
        }
    }
}
</script>

<style scoped>

.back-top image{
    width: 100rpx;
    height: 100rpx;
}
</style>