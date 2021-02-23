/*
 * @Author: xuxinjiang
 * @Date: 2020-08-01 13:56:56
 * @LastEditors: your name
 * @LastEditTime: 2020-12-12 11:29:14
 * @Description:
 * params
 *   data: Array  //导出的数据
 *   name: String  // 导出文件名  例如 xx.xlsx
 *   head: Object // 中文头部   例如 导出的data数据是 [{title:'我是标题', name:'张三'}]  head 应该为 {title:'标题',name:'姓名'}
 */
import xlsx from 'xlsx'

export default async (data: any, name: string, head?: { [key: string]: string }) => {
  //设置中文表头
  if (head && typeof head === 'object') {
    data = data.map((item: any) => {
      const newItem: any = {}
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const tit = head[key] || key
          newItem[tit] = item[key]
        }
      }
      return newItem
    })
  }
  const jsonWorkSheet = xlsx.utils.json_to_sheet(data)
  const workBook = {
    SheetNames: ['Sheet0'],
    Sheets: {
      Sheet0: jsonWorkSheet
    }
  }
  const buf = await xlsx.write(workBook, {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  })

  const blob = new Blob([s2ab(buf)], { type: 'application/octet-stream' })
  const elink = document.createElement('a')
  elink.style.display = 'none'
  elink.download = name
  const url = URL.createObjectURL(blob)
  elink.href = url
  document.body.appendChild(elink)
  elink.click()
  document.body.removeChild(elink)
}
// 字符串转ArrayBuffer
function s2ab(s: any) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}
