<template>
  <view>
      <swiper :cbanners=banners></swiper>
      <recommend :crecommend=recommends></recommend>
      <image class="recommend-img" src="../../static/recommend/recommend_bg.jpg"></image>
      <tab-control @tabclick="goodsclick"></tab-control>
      <goods :cgoods=goods[goodsindex].list></goods>
      <back-top class="back-top" v-if="backtopshow"></back-top>        
  </view>
</template>

<script>
import request from '../../network/network'
import Swiper from '../../components/swiper/Swiper'
import Recommend from '../../components/recommend/Recommend'
import TabControl from '../../components/tabcontrol/TabControl'
import Goods from '../../components/goods/Goods'
import BackTop from '../../components/backtop/BackTop'
import{gethomedata,gethomegoods} from '../../network/home'
export default {
    name:'Home',
    components:{
        Swiper,
        Recommend,
        TabControl,
        Goods,
        BackTop
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            goodsindex:'pop',
            backtopshow:false
        }
    },
    onLoad(options){
       this.gethomedata()
       this.gethomegoods('pop')
       this.gethomegoods('new')
       this.gethomegoods('sell')
    },
    methods:{
        goodsclick(index){
            switch(index){
                case 0:
                    this.goodsindex='pop'
                    break
                case 1:
                    this.goodsindex='new'
                    break
                case 2:
                    this.goodsindex='sell'
                    break    
            }
        },
        gethomedata(){
            gethomedata().then(res => {
                this.banners=res.data.data.banner.list
                this.recommends=res.data.data.recommend.list
            })
        },
        gethomegoods(type){
            const page=this.goods[type].page+1
            gethomegoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page += 1
            })
        }
    },
    onReachBottom(){
        this.gethomegoods(this.goodsindex)
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
.recommend-img{
    padding: 15px 0 10px;
    border-top: 5px solid red;
    width: 100%;
}
.back-top{
    position: fixed;
    right: 10rpx;
    bottom: 10rpx;
}
</style>