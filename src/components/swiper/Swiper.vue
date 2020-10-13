<template>
    <view class="album-swiper">
        <swiper autoplay indicator-dots circular>
            <swiper-item v-for="(item,index) in cbanners"
             :key="index" class="itemimg">
                    <image :src="item.image"></image>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        cbanners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.itemimg image{
    width: 100%;
    height: 100%;
}

</style>