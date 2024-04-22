import { request } from '@/utils/request'

export function getRouterList() {
  return request({
    url: '/user/menu',
    method: 'get'
  })
}
