import type { RouteRecordRaw, RouterOptions } from 'vue-router'

export interface Meta {
  name: string
  isRoot: boolean //根节点
  hidden: boolean
  icon: string
  noCache: boolean
  outLink: boolean
}

export interface CustomRouterOptions extends RouterOptions {
  constantRoute?: RouteRecordRaw[]
}
