import Mock from 'mockjs'
import { sideMenu } from './sideMenu'

Mock.mock('/user/menu', 'get', {
  status: 200,
  message: 5,
  data: sideMenu
})
