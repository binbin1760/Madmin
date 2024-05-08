import type { Meta } from '@/router/types'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { getRouterList } from '@/api'
import { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface RouterType {
  path: string
  componentSrc: string
  name: string
  meta: Meta
  children?: Array<RouterType>
}

interface MenuList {
  allMenu: Array<RouterType>
}

function generateRoute(route: RouterType): RouteRecordRaw {
  return {
    path: route.path,
    name: route.name,
    meta: route.meta as unknown as RouteMeta, //类型Record 索引有问题
    component: () => import(`@/${route.componentSrc}`)
  }
}

export const useMenuList = defineStore({
  id: 'menu-list',
  state: (): MenuList => ({
    allMenu: []
  }),
  getters: {
    // 生成顶部菜单
    dir(state) {
      return state.allMenu.map((item) => item.meta.name)
    },
    sideMenu(state) {
      const arr = state.allMenu.map((item) => item.children)
      return arr[0]
    }
  },
  actions: {
    // 获取路由菜单
    async initMenuList() {
      const result = await getRouterList()
      this.allMenu = result.data
      return result.data
    },
    generateRoutes(allMenu: Array<RouterType>): Array<RouteRecordRaw> {
      const routes = allMenu.map((item) => {
        if (item.children) {
          return {
            ...generateRoute(item),
            children: this.generateRoutes(item.children)
          }
        } else {
          return generateRoute(item)
        }
      })
      return routes as unknown as RouteRecordRaw[]
    }
  }
})

export function menuListStore() {
  return useMenuList(store)
}
