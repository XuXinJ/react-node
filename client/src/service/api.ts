import request from 'umi-request'

// 获取数据
export function getdata(params = {}) {
  return request.get(`/app/api/getdata`)
}

// 获取用户信息
export function getUser() {
  return request.get(`/app/user/getUser`)
}

// 添加用户
export function setUser(params: { username: string, age: number }) {
  return request.get(`/app/user/setUser`, { data: params })
}

// 修改用户名
export function fixUsername(params: { id: string, name: string }) {
  return request.get(`/user/fixUsername`, { data: params })
}