import type { Meta } from '@/router/types'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { getRouterList } from '@/api'

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

export const useMenuList = defineStore({
  id: 'menu-list',
  state: (): MenuList => ({
    allMenu: []
  }),
  getters: {
    dir(state) {
      return state.allMenu.map((item) => item.meta.name)
    },
    sideMenu(state) {
      const arr = state.allMenu.map((item) => item.children)
      return arr[0]
    }
  },
  actions: {
    initMenuList() {
      getRouterList().then((res) => {
        this.allMenu = res.data
      })
    }
  }
})

export function menuListStore() {
  return useMenuList(store)
}
