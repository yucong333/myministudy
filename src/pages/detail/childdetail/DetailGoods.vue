<template>
    <view id="detail-goods">
      <view class="title">{{detailgoods.title}}</view>
      <text class="price">{{detailgoods.price}}</text>
      <text class="oldPrice">{{detailgoods.oldPrice}}</text>
      <text class="desc">{{detailgoods.discountDesc}}</text>
      <view class="itemflex">
         <view v-for="(itme,index) in detailgoods.columns"
          :key="index"
          class="itemgoods">
            {{itme}}
          </view>
      </view>
    </view>
</template>

<script>
export default {
    name:'DetailGoods',
    props:{
      detailgoods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
}
</script>

<style scoped>
.itemflex{
  display: flex;
  padding: 40rpx 0 40rpx;
  border-bottom: 1rpx solid #ff699c;
}
.itemgoods{
  flex: 1;
  text-align: center;
  color: #ff699c;
}
.title{
  font-size: 38rpx;
  color: #ff699c;
}
.price{
  font-size: 60rpx;
  color: red;
}
.oldPrice{
  color: red;
  text-decoration:line-through;
}
.desc{
  background-color:red;
  border-radius: 40rpx;
  color:white;
  padding: 12rpx;
}
</style>