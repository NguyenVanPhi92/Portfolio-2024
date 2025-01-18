import React from 'react'
import { BiLogoTelegram } from 'react-icons/bi'

const TelegramWidget = () => {
  return (
    <a
      href='https://t.me/Phin_D'
      className='fixed float-right p-2 m-4 text-white bg-teal-600 rounded-md cursor-pointer right-4 bottom-16 opacity-90'
      target='_blank'
      rel='noopener noreferrer'
    >
      <BiLogoTelegram size={18} />
    </a>
  )
}

export default TelegramWidget
