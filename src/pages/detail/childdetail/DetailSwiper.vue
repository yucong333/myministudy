<template>
        <swiper autoplay indicator-dots circular class="topswiper">
            <swiper-item v-for="(item,index) in ctopimages"
             :key="index" class="topimage">
                    <image mode="widthFix" :src="item"></image>
            </swiper-item>
        </swiper>
</template>

<script>
export default {
    name:'DetailSwiper',
    props:{
        ctopimages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.topswiper{
    height: 600rpx;
}
.topimage image{
    width: 100%;
}
</style>