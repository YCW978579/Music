<template>
  <div class="search">
    <input type="text" placeholder="请输入歌曲 歌手" onfocus="this.placeholder=''" onblur="this.placeholder='请输入歌曲 歌手'" >
    <p>热门搜索</p>
    <span class="nameS" v-for="(item,index) in ycw" :key="index.key">
         {{item.k}}
    </span> 
  </div>
</template>

<script>
import {getHotKey} from '@/api'
// import Loading from '@/components/loading'
	export default {
    data:function(){
		  return{
        ycw:[]
		  }
		},
		created(){
		  this.aaa()
		},
		methods:{
		  aaa:function(){
        let id = this.$route.params.id
		    getHotKey(id).then((res) => {
          console.log(res);
          
          this.ycw = res.data.hotkey
          // this.isLoading=false
        })
      },
    }
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/less/variable.less';
.search{
   width: 100%;
   height: 270px;
   overflow: hidden;
  input{
    background:@color-highlight-background;
    height: 40px;
    margin:20px 5%;
    width: 90%;
    border-radius: 7px;
    color:@color-text-ll;
    padding-left:10px;
  }
  input:focus{
    border:none;
    outline: none;
  }
  p{
    // margin:50px 0 50px 30px;
    font-size:15px;
    color:rgba(255, 255, 255, 0.5);
    margin-left:30px;
    margin-bottom:20px;
  }
  .nameS{
      display: inline-block;
      height: 30px;
      background:@color-highlight-background;
      color:rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      line-height: 30px;
      font-size: 13px;
      padding:2px 10px;
      margin-left: 5%;
      margin-bottom: 20px;
  }
}
</style>
