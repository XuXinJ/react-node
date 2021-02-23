
import './index.less';
import * as Api from '../service/api'
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [text, setText] = useState('')
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const res = await Api.getdata()
    setText(res?.result.text || '')
  }
  return (
    <div>
      <h1 className='title'>{text}</h1>
    </div>
  );
}
