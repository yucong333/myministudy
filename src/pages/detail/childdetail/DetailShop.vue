<template>
  <view id="detail-shop">
      <view class="services" >
          <view v-for="(item,index) in detailshop.services"
          :key="index"
          class="item" v-show="index>0"
          >
            <image :src="'https:'+ item.icon"></image><text>{{item.name}}</text>
          </view>
      </view>
      <view class="shoplogo">
        <image :src="detailshop.logo"></image>
        <text class="shopname">{{detailshop.name}}</text>
      </view>
      <view class="shopsell">
          <view class="sellleft" >
            <view class="lefts">
              <view class="goodsell">{{detailshop.sells}}</view>
              <text>总销量</text>
            </view>
            <view class="rightg">
              <view class="goodsell">{{detailshop.goods}}</view>
              <text>全部宝贝</text>
            </view>

          </view>
          <view class="sellright">
              <view v-for="(item,index) in detailshop.score"
              :key="index">
                {{item.name+'  '+item.score+'   '+item.isBetter}}
              </view>
          </view>
      </view>
      <view class="btnshop">
            <button size="mini">进店逛逛</button>
      </view>
    </view>
</template>

<script>
export default {
    name:'DetailShop',
     props:{
        detailshop:{
        type:Object,
        default(){
         return {}
      }
    }
  }
}
</script>

<style scoped>
.services{
  display: flex;
  padding:40rpx 0 40rpx;
  border-bottom: 6rpx solid #ff699c;
  color: #ff699c;
}
.item{
  flex: 1;
  text-align:center;
}
.item image{
  width: 40rpx;
  height: 40rpx;
}
.shoplogo image{
  width: 120rpx;
  height: 120rpx;
  border-radius: 100rpx;
  border: 1rpx solid #ff699c;
}
.shoplogo{
  font-size: 40rpx;
  align-items: center;
  display: flex;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
}
.shopname{
  margin-left: 20rpx;
  color: #ff699c;
}
.shopsell{
  display: flex;
}
.sellleft{
  flex: 1;
  width: 50%;
  height: 200rpx;
  text-align: center;
  font-size: 36rpx;
  border-right: 2rpx solid;
  margin-top: 40rpx;
}
.sellright{
  width: 50%;
  text-align: center;
  height: 200rpx;
  margin-top: 40rpx;
  font-size: 36rpx;
}
.lefts{
  float: left;
}
.rightg{
  float:right;
}
.goodsell{
  margin-bottom: 10rpx;
}
.btnshop{
  text-align: center;
  margin-top:40rpx;
}
</style>