<template>
  <div class="hello">
    <div class="weui-btn_primary weui-header ">
      <h1 class="weui-header-title">任务中心</h1>
    </div>
    <taskStatusSelect/>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" class="infinite-list-item">
        <div id="task_title"><span>任务{{ i }}</span></div>
        <div id="task_content">任务内容任务内容任务内容任务内容任务内容</div>
         <br>
      </li>
    </ul>
   <!--显示列表数据 滑动组件 -->
    <!--<div class="page-bd-15">
      <div class="weui-cells" id="rank-list">
      </div>

      <div class="weui-loadmore" id="more">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载</span>
      </div>
    </div>-->
  </div>
</template>

<script>
import taskStatusSelect from '@/components/SelecttaskStatus'
export default {
    name: 'TaskCenter',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            count: 0
        }
    },
    methods: {
        load () {
            this.count += 2
        }
    },components: {
        taskStatusSelect
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #task_title{
    display: flex;
  }
  #task_content{
    display: flex;
  }
</style>
