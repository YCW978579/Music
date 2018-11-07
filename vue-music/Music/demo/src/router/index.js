import Vue from 'vue'
import Router from 'vue-router'
import Singer from '@/views/singer'
import Recommend from '@/views/recommend'
import Rank from '@/views/rank'
import Search from '@/views/search'
import RecommendDetail from '@/views/recommend/detail'
import SingerDetail from '@/views/singer/detail.vue'
import RankDetail from '@/views/rank/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"recommend"
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children:[
        {
          path:'/recommend/:id',
          component:RecommendDetail
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children:[
        {
          path:'/singer/:id',
          component:SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children:[
        {
          path:'/rank/:id',
          component:RankDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
