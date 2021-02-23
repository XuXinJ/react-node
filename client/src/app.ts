import request from 'umi-request'
import { message } from 'antd'
import { history } from 'umi'
import Loading from '@/common/loading'

window.$loading = new Loading()

// 响应拦截
request.interceptors.response.use(async (response: any) => {
  const data = await response.clone().json()
  if (data.code === 401) {
    history.push('/console/login')
  }
  if (data.code === -1 || response.status === 404) {
    window.$loading.hide()
    message.error(data.message)
  }
  if (data.code === 200 || data.code === 0 || data.result) {
    return response
  }
  return false
})

export function onRouteChange() {
  window.$loading.hide()
}
