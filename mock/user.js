/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-09 21:19:04
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 22:02:49
 */
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是超级管理员，我的权限最大',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是普通编辑员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑员'
  }
}

module.exports = [
  // login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 60204,
          message: '用户名密码不正确'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },
  // get userInfo
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if (!info) {
        return {
          code: 50008,
          message: '登录失败，不能获取用户信息'
        }
      }
      return {
        code: 20000,
        data: info
      }
    }
  },

  // logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: '退出成功了'
      }
    }
  }
]