import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Collection from '@/components/Collection'
import Team from '@/components/Team'
import My from '@/components/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },{
      path: '/Team',
      name: 'Team',
      component: Team
    }
    ,{
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
