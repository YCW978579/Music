<template>
  <div class="rankings">
    <scroll class="rankings-content">
      <div>
        <div class="box" v-for="item in top" :key="item.key" @click="rank(item.id)">
          <div class="img">
            <img :src="item.picUrl" >
          </div>
          <div class="text">
            <p v-for="(itemA,index) in item.songList" :key="itemA.key">{{index+1}}、{{itemA.songname}}--{{itemA.singername}}</p>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import {getRankList} from '@/api'
import Bscroll from 'better-scroll'
import Scroll from '@/components/scroll'
	export default {
		data:function(){
		  return{
        top:{},
        list:[],
        //isLoading:true
      }
		},
		created(){
      this.getTop()
		},
		methods:{
		  getTop:function(){
        getRankList().then((res) => {
          this.top = res.data.topList
          this.list = res.data.songList
        })
      },
      rank(id){
        this.$router.push({path:`/rank/${id}`})
      }
    },
    components:{
      Scroll
      //Loading
    }
	}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/variable.less');
  .rankings{
    color:@color-text-d;
    position:fixed;
    width:100%;
    top:88px;
    bottom:0;
    .box{
      position: relative;
      margin-top:30px;
      margin-bottom:20px;
      display:flex;
      height: 102px;
      overflow: hidden;
      background:#333;
      .img{
        img{
          width:120px;  
          height: 102px;
        }
      }
      .text{
        line-height: 34px;
        flex:1;
        text-align:left;
        margin-left:20px;
        font-size:15px;
        P{
          overflow:hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
          width: 210px;
        }
       
      }
    }
  }
  .rankings-content{
    height:100%;
    overflow: hidden;
  }
  
  
</style>