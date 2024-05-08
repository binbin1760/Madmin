import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterHistory
} from 'vue-router'
import { App } from 'vue'
import type { CustomRouterOptions } from './types'
import { createRouterGuards } from './guards'
const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/layout',
    name: '配置layout',
    meta: {
      name: '配置layout'
    },
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/',
    meta: {
      name: '重定向login',
      isRoot: true
    },
    redirect: '/layout'
  }
]

const routes = [...constantRoute]
const routerHistory: RouterHistory = createWebHistory()
const customRouterOptions: CustomRouterOptions = {
  history: routerHistory,
  routes: routes,
  scrollBehavior(_to, _from, savePosition): any {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
}
const router = createRouter(customRouterOptions)

export function setupRouter(app: App) {
  app.use(router)
  createRouterGuards(router)
}

export default router
