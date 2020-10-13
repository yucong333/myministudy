<template>
  <view id="grid">
    <grid-list :cgrids=grids></grid-list>
    <text class="ceshi">123456</text>
  </view>
</template>

<script>
import GridList from '../../components/gridlist/GridList'
import {getCategory} from '../../network/grid'
export default {
  name:'Grid',
  components:{
    GridList
  },
  data(){
    return{
      grids: [],
    }
  },
  onLoad(options){
     this.getCategory()
  },
  
  methods:{
      getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.grids = res.data.data.category.list
        })
      }
    },
  }
</script>

<style>
#grid{
  height: 100%;
}
.ceshi{
  position: fixed;
  right: 0;
  top: 0;
}
</style>