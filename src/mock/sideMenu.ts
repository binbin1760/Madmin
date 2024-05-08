import { Meta } from '@/router/types'

export interface RouterType {
  path: string
  componentSrc: string
  name: string
  meta: Meta
  children?: Array<RouterType>
}

export const sideMenu: Array<RouterType> = [
  {
    path: '/system',
    name: 'system',
    componentSrc: 'layout/index',
    meta: {
      name: '系统设置',
      isRoot: true,
      hidden: false,
      icon: ' ',
      noCache: false,
      outLink: false
    },
    children: [
      {
        path: '/system/menu',
        name: 'set-menu',
        componentSrc: 'views/system/side-menu/index',
        meta: {
          name: '菜单管理',
          isRoot: false,
          hidden: false,
          icon: 'setMenu',
          noCache: false,
          outLink: false
        }
      }
    ]
  }
]
