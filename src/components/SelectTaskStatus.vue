<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '1',
                label: '全部任务'
            }, {
                value: '2',
                label: '未完成任务'
            }, {
                value: '3',
                label: '已完成任务'
            }, {
                value: '4',
                label: '新任务'
            }],
            value: '1'
        }
    },

}
</script>
