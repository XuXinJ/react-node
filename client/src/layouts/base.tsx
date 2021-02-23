/*
 * @Author: xuxinjiang
 * @Date: 2020-07-25 14:20:50
 * @LastEditors: your name
 * @LastEditTime: 2021-02-23 17:01:49
 * @Description: file content
 */
import React from 'react'
import './base.less'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

export default (props: any): React.ReactNode => {
  return (
    <div className='base-body'>
      <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>
    </div>
  )
}
