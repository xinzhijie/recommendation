import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Message } from 'element-ui'
Vue.use(VueRouter);
import store from "@/store/index";


const login = () => import('@/views/login/index.vue');
const registry = () => import('@/views/login/registry/index.vue');
const index = () => import('@/views/index/index.vue');
const predictionScore = () => import('@/views/index/predictionScore/add.vue');
const recommendInjection = () => import('@/views/index/recommendInjection/add.vue');
const recommendReservoir = () => import('@/views/index/recommendReservoir/add.vue');
const list = () => import('@/views/index/list/index.vue');
const top = () => import('@/views/top/index.vue');
const admin = () => import('@/views/admin/user/index.vue');


const routes: Array<RouteConfig> = [
  {
    path: '/', component: top,
    children: [
      { path: '/', component: index }
    ]
  },
  {
    path: '/', component: top,
    children: [
      { path: '/list/:code', component: list }
    ]
  },
  {
    path: '/predictionScore', component: top,
    children: [
      { path: 'add/:id', component: predictionScore }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registry',
    name: 'registry',
    component: registry
  },
  {
    path: '/recommendInjection', component: top,
    children: [
      { path: 'add/:id', component: recommendInjection }
    ]
  },
  {
    path: '/recommendReservoir', component: top,
    children: [
      { path: 'add/:id', component: recommendReservoir }
    ]
  },
  {
    path: '/admin', component: top,
    children: [
      { path: 'index', component: admin }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


const whiteList = ['/login', '/registry'] // 不重定向白名单
const adminList = ['/admin/index']
router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('token');
  if(token) {
    if(to.path==='/login') {
      next("/")
    } else {
      if (store.state.user.user.role != 10) {
        if (adminList.indexOf(to.path) !== -1) {
          Message.error("没有权限，请联系管理员！")
          next("/")
        } else {
          next()
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router;
