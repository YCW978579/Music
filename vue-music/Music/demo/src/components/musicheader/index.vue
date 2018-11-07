<template>
  <div class="music-header">
      <span class="logo"></span>
      <h2 class="text">Water Music</h2>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('~@/assets/less/variable.less');
  .music-header{
    height:44px;
    color:@color-theme;
    text-align:center;
    position:relative;
    .logo{
      width:32px;
      height:32px;
      display:inline-block;
      background:url('logo.png');
      background-size:100% 100%;
      margin-top:6px;
      margin-right:8px;
    }
    .text{
      display:inline-block;
      line-height:44px;
      color:@color-theme;
      position:relative;
      top:-6px;
    }
  }
</style>
