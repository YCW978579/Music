<template>
  <div class="tabs">
    <router-link to="/recommend">
      <span class="tabs_txt">推荐</span>
    </router-link>
    <router-link to="/singer">
      <span class="tabs_txt">歌手</span>
    </router-link>
    <router-link to="/rank">
      <span class="tabs_txt">排行</span>
    </router-link>
    <router-link to="/search">
      <span class="tabs_txt">搜索</span>
    </router-link>

  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/less/variable.less';
  .tabs{
    height:44px;
    display:flex;
    a{
      flex:1;
      text-align:center;
      line-height:44px;
      color:@color-text-ll;
      &.router-link-active{
        color:@color-theme;
        .tabs_txt{
          padding-bottom: 7px;
          border-bottom: 2px solid @color-theme;
      }
      }
    }
  }

</style>
