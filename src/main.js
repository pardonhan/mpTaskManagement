// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import weui from 'weui.js'
import 'weui'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$weui = weui
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
