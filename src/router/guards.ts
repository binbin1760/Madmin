import { Router } from 'vue-router'
import { menuListStore } from '@/store'
const { initMenuList, generateRoutes } = menuListStore()
export function createRouterGuards(Router: Router): void {
  Router.beforeEach(() => {
    initMenuList().then((res) => {
      const asyncRoutes = generateRoutes(res)
      console.log(asyncRoutes)

      Router.isReady().then(() => {
        Router.addRoute(asyncRoutes[0])
      })
    })
    console.log(Router)
  })
}
