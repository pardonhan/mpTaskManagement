import Vue from 'vue'
import Router from 'vue-router'

import TaskCenter from '@/components/TaskCenter'
import Collection from '@/components/Collection'
import Team from '@/components/Team'
import My from '@/components/My'
import AddTask from '@/components/AddTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskCenter',
      component: TaskCenter
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
    },{
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    }
  ]
})
