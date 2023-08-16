import React, { useEffect, useState } from 'react';
import GainItem from './GainItem';
import css from './GainList.module.css'

export default function GainList() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('/data/gainItems.json')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })
      .catch(console.warn)
  }, [])

  return (
    <div className='list'>
      {items.map(iObj => (
        <GainItem
          key={iObj.id}
          title={iObj.title}
          text={iObj.descr}
          icon={iObj.icon} />
      ))}
    </div>
  )
}
