<template>
    <view class="tab-control">
         <view v-for="(item,index) in tab"
        :key="index" 
        :class="{active:tabindex===index}"
        @click="itemclick(index)"
        class="tabitem">
        {{item}}
        </view>
    </view>
   
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            tab:['流行','新品','精选'],
            tabindex:0
        }
    },
    methods:{
        itemclick(index){
            this.tabindex=index
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style scoped>
.active{
    color: red;
}
.tab-control{
    display: flex;
    text-align: center;
    position: sticky ;
    
}
.tabitem{
    flex: 1;
}
</style>