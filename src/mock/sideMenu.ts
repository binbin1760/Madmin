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
    path: '/home',
    name: 'home',
    componentSrc: 'layout/index',
    meta: {
      name: '首页',
      isRoot: true,
      hidden: false,
      icon: 'icon1',
      noCache: false,
      outLink: false
    },
    children: [
      {
        path: '/home/staff',
        name: 'home-staff',
        componentSrc: 'views/home/staff',
        meta: {
          name: '员工',
          isRoot: false,
          hidden: false,
          icon: 'icon1',
          noCache: false,
          outLink: false
        }
      },
      {
        path: '/home/group',
        name: 'home-group',
        componentSrc: 'views/home/group',
        meta: {
          name: '主管',
          isRoot: false,
          hidden: false,
          icon: 'icon1',
          noCache: false,
          outLink: false
        },
        children: [
          {
            path: '/home/group/test',
            name: 'home-group-test',
            componentSrc: 'views/home/group',
            meta: {
              name: '主管-1',
              isRoot: false,
              hidden: false,
              icon: 'icon1',
              noCache: false,
              outLink: false
            }
          }
        ]
      },
      {
        path: '/home/leader',
        name: 'home-leader',
        componentSrc: 'views/home/leader',
        meta: {
          name: '经理',
          isRoot: false,
          hidden: false,
          icon: 'icon1',
          noCache: false,
          outLink: false
        }
      }
    ]
  }
]
