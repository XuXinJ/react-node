/*
 * @Author: xuxinjiang
 * @Date: 2020-05-19 09:55:25
 * @LastEditTime: 2021-02-23 16:55:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath:
 */

import { Spin } from 'antd'
import ReactDOM from 'react-dom'

export default class Loading {
  constructor() {
    this.node = document.createElement('div')
    this.node.id = 'ctrloading'
    document.body.appendChild(this.node)
  }

  node: any

  show(tip = '', zIndex = 20) {
    this.tip = tip
    this.spinning = true
    this.render(zIndex)
  }

  hide() {
    this.tip = ''
    this.spinning = false
    this.render()
  }

  tip = ''

  spinning = false

  render(zIndex = 222) {
    ReactDOM.render(
      <div className='public-loading-box' style={{ display: this.spinning ? 'block' : 'none', zIndex }}>
        <Spin tip={this.tip} spinning={this.spinning} />
      </div>,
      this.node
    )
  }
}
