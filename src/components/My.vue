<template>
  <div class="hello">
    <div class="weui-btn_primary weui-header ">
      <h1 class="weui-header-title">个人中心</h1>
    </div>
    <div class="content">
      <div class="userinfo">
        <div class="weui-avatar-circle">
          <img src="../../static/img/home/touxiang.png">
          <span class="weui-icon-success weui-icon-safe-warn"></span>
        </div>
        <div class="user_name">
         <p class="name">韩凤麟</p>
          <p class="dept">智能业务中心</p>
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
    display:flex;
    justify-content:flex-start;
    align-items: center;
  }
  .name{
    font-size: 16px;
  }
  .dept{
    font-size: 12px;
    color: gray;
  }
  .user_name p {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 10px;
  }
</style>
