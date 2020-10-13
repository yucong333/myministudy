<template>
    <scroll-view class="grid-list" scroll-y>
        <view v-for="(item,index) in cgrids" 
        :key="index"
        class="itemlist"
        :class="{active:gridindex===index}"
        @click="gridclick(index)">
            {{item.title}}
        </view>
    </scroll-view>
    
</template>

<script>
export default {
    name:'GridList',
    props:{
        cgrids:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            gridindex:0
        }
    },
    methods:{
        gridclick(index){
            this.gridindex=index
        }
    }
}
</script>

<style scoped>
.grid-list{
    height: 100%;
    width: 280rpx;
    background-color: #f6f6f6;
    font-size: 30rpx;
}
.itemlist{
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
}
.active{
    background-color: white;
    border-right: 1rpx solid #f6f6f6;
}
</style>