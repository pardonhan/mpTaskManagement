<template>
  <div id="bottomNavigationFullScreen">
    <div class="bottomNavigation_content">
      <div class="bottomNavigation_li_content">
        <div class="bottomNavigation_li_public_content"  @click="publicClick('/')">
          <img :src="imagesUrl.homeIcon" alt="">
          <div :class="imagesUrl.homeIcon.indexOf('task_b') === -1 ? 'no_select' : 'select' ">任务</div>
        </div>
        <div class="bottomNavigation_li_public_content" @click="publicClick('/collection')">
          <img :src="imagesUrl.rechargeIcon" alt="">
          <div :class="imagesUrl.rechargeIcon.indexOf('collection_b') === -1 ? 'no_select' : 'select' ">统计</div>
        </div>
        <div class="bottomNavigation_li_public_content" @click="publicClick('/addTask')">
          <img class="add_task" :src="imagesUrl.addTask" alt="">
        </div>
        <div class="bottomNavigation_li_public_content" @click="publicClick('/team')">
          <img :src="imagesUrl.moreIcon" alt="">
          <div :class="imagesUrl.moreIcon.indexOf('team_b') === -1 ? 'no_select' : 'select' ">团队</div>
        </div>
        <div class="bottomNavigation_li_public_content" @click="publicClick('/my')">
          <img :src="imagesUrl.myIcon" alt="">
          <div :class="imagesUrl.myIcon.indexOf('my_b') === -1 ? 'no_select' : 'select' ">我的</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'bottomNavigation',
        data() {
            return {
                imagesUrl: { // 排版图片使用懒加载
                    homeIcon: './static/img/home/navigation/task_b.png', // 任务
                    rechargeIcon: './static/img/home/navigation/collection.png', // 统计
                    moreIcon: './static/img/home/navigation/team.png', // 团队
                    myIcon: './static/img/home/navigation/my.png', // 我的
                    addTask: './static/img/home/navigation/add.png'
                }
            }
        },
        activated() {
            if (typeof this.$route.path === 'string') {
                let val = this.$route.path
                // let val = this.$route.path.substring(1, this.$route.path.length)
                // console.log(val)
                switch (val) {
                    case '/':
                        this.imagesUrl.homeIcon = './static/img/home/navigation/task_b.png' // 任务
                        this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 统计
                        this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 团队
                        this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                        this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                        break
                    case '/collection':
                        this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 任务
                        this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection_b.png' // 统计
                        this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 团队
                        this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                        this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                        break
                    case '/team':
                        this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 任务
                        this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 统计
                        this.imagesUrl.moreIcon = './static/img/home/navigation/team_b.png' // 团队
                        this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                        this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                        break
                    case '/my':
                        this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 任务
                        this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 统计
                        this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 团队
                        this.imagesUrl.myIcon = './static/img/home/navigation/my_b.png' // 我的
                        this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                        break
                    case '/addTask':
                        this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 任务
                        this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 统计
                        this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 团队
                        this.imagesUrl.myIcon = './static/img/home/navigation/my_b.png' // 我的
                        this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                        break
                }
            } else {
                console.log('不合法参数')
            }
        },
        methods: {
            // 点击切换函数
            clickChang(val) {
                // console.log('点击切换函数' + val)
                if (typeof val === 'string') {
                    switch (val) {
                        case '/':
                            this.imagesUrl.homeIcon = './static/img/home/navigation/task_b.png' // 首页
                            this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 充值
                            this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 更多
                            this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                            this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                            this.$router.push({ path: '/' })
                            // console.log(this.imagesUrl)
                            break
                        case '/collection':
                            this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 首页
                            this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection_b.png' // 充值
                            this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 更多
                            this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                            this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                            this.$router.push({ path: '/Collection' })
                            // console.log(this.imagesUrl)
                            break
                        case '/team':
                            this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 首页
                            this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 充值
                            this.imagesUrl.moreIcon = './static/img/home/navigation/team_b.png' // 更多
                            this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                            this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                            this.$router.push({ path: '/Team' })
                            // console.log(this.imagesUrl)
                            break
                        case '/my':
                            this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 首页
                            this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 充值
                            this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 更多
                            this.imagesUrl.myIcon = './static/img/home/navigation/my_b.png' // 我的
                            this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                            this.$router.push({ path: '/My' })
                            // console.log(this.imagesUrl)
                            break
                        case '/addTask':
                            this.imagesUrl.homeIcon = './static/img/home/navigation/task.png' // 首页
                            this.imagesUrl.rechargeIcon = './static/img/home/navigation/collection.png' // 充值
                            this.imagesUrl.moreIcon = './static/img/home/navigation/team.png' // 更多
                            this.imagesUrl.myIcon = './static/img/home/navigation/my.png' // 我的
                            this.imagesUrl.addTask = './static/img/home/navigation/add.png' // 添加任务
                            this.$router.push({ path: '/addTask' })
                            // console.log(this.imagesUrl)
                            break

                    }
                } else {
                    console.log('不合法的传值')
                }
            },
            // 点击导航栏事件
            publicClick(val) {
                // console.log('点击导航栏事件' + val)
                if (typeof val === 'string') {
                    switch (val) {
                        case '/':
                            this.clickChang(val)
                            // this.$router.push({ path: '/' })
                            break
                        case '/collection':
                            this.clickChang(val)
                            // this.$router.push({ path: '/recharge' })
                            break
                        case '/team':
                            this.clickChang(val)
                            // this.$router.push({ path: '/more' })
                            break
                        case '/my':
                            this.clickChang(val)
                            // this.$router.push({ path: '/my' })
                            break
                        case '/addTask':
                            this.clickChang(val)
                            break
                    }
                } else {
                    console.log('不合法的传值')
                }
            }
        }
    }
</script>

<style>
  #bottomNavigationFullScreen {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    height: 60px;
    width: 100%;
    -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    background-color: #fff;
  }
  .bottomNavigation_content {
  }

  .bottomNavigation_li_content {
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
  }

  .bottomNavigation_li_public_content {
    flex: 1;
    height: 45px;
    /* margin-left: 3px;
    background-color: #ccc; */
  }
  .add_task{
    height: 45px!important;
    width: 45px!important;
  }
  .bottomNavigation_li_public_content img {
    height: 24px;
    width: 24px;
  }
  .bottomNavigation_li_public_content div {
    position: relative;
    bottom: 3px;
  }

  .no_select {
    font-size: 12px;
    color: #222;
  }

  @keyframes select {
    0% {
      font-size: 12px;
    }
    50% {
      font-size: 13px;
    }
    100% {
      font-size: 14px;
    }
  }
  .select {
    animation: select 0.6s;
    font-size: 14px;
    color: #2196f3;
  }
</style>
