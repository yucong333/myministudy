<template>
    <view id="detail">
         <view>{{$store.state.goodslist.length}}</view>
        <detail-swiper :ctopimages=topImages></detail-swiper>
        <detail-goods :detailgoods=goods></detail-goods>
        <detail-shop :detailshop=shop></detail-shop>
        <detail-info :cdetail=details></detail-info>
        <detail-goods-nav @addtocart="addcarts"></detail-goods-nav>
        <back-top class="back-top" v-if="backtopshow"></back-top>
        
    </view>
</template>

<script>
import DetailSwiper from './childdetail/DetailSwiper'
import DetailGoods from './childdetail/DetailGoods'
import DetailShop from './childdetail/DetailShop'
import DetailInfo from './childdetail/DetailInfo'
import DetailGoodsNav from './childdetail/DetailGoodsNav'
import BackTop from '../../components/backtop/BackTop'
import {getdetailid ,Goods,Shop,DetailInfos} from '../../network/detail'
export default {
    name:'Detail',
    components:{
        DetailSwiper,
        DetailGoods,
        DetailShop,
        DetailInfo,
        DetailGoodsNav,
        BackTop
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            details:{},
            backtopshow:false
        }
    },
    onLoad(options){
        this.iid=options.iid
        getdetailid(this.iid).then(res => {
            const data=res.data.result
            //详情轮播图
            this.topImages=data.itemInfo.topImages
            //商品信息
            this.goods=new Goods(data.columns,data.itemInfo)
            //商家信息
            // console.log(this.goods)
            this.shop=new Shop(data.shopInfo)
            //详情信息
            this.details=data.detailInfo
            console.log(res)
        })
    },
    methods:{
        addcarts(){
            // console.log('123')
            const cartdata={}
            cartdata.image=this.topImages[0]
            cartdata.title=this.goods.title
            cartdata.desc=this.goods.desc
            cartdata.iid=this.iid
            this.$store.commit('addgoodscart',cartdata)
        }
    },
     onPageScroll(options){
        const scrollTop=options.scrollTop
        if(scrollTop>1000){
            this.backtopshow=true
        }else{
            this.backtopshow=false
        }

    }
}
</script>

<style>
#detail{
    height: 100%;
    margin-bottom: 120rpx;
}
.back-top{
    position: fixed;
    right: 10rpx;
    bottom: 130rpx;
}
</style>