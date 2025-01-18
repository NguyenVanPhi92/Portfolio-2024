import React from 'react'
import { TbBrandMessenger } from 'react-icons/tb'

const MessWidget = () => {
  return (
    <a
      href='https://t.me/Phin_D'
      className='fixed float-right p-2 m-4 text-white bg-teal-600 rounded-md cursor-pointer right-4 bottom-40 opacity-90'
      target='_blank'
      rel='noopener noreferrer'
    >
      <TbBrandMessenger size={18} />
    </a>
  )
}

export default MessWidget
