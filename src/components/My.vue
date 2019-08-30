<template>
  <div class="hello">
    <div class="weui-btn_primary weui-header ">
      <h1 class="weui-header-title">个人中心</h1>
    </div>
    <div class="content">
      <div class="weui-media-box weui-media-box_appmsg">
        <div class="weui-avatar-circle">
          <img src="../../static/img/home/touxiang.png">
          <span class="weui-icon-success weui-icon-safe-warn"></span>
        </div>
        <div class="userinfo">
          <p >韩凤麟</p>
          <p class="">智能业务中心</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'My',
    data () {
        return {
            msg: 'My'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin: 2rem 2rem 0 2rem;
}
.userinfo{

}
</style>
