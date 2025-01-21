import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { GrLanguage } from 'react-icons/gr'
import { locales } from '../i18n/i18n'

const MultilingualComponent = () => {
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language]
  const nodeRef = useRef(null)
  const handleChangeLanguage = (lng) => i18n.changeLanguage(lng)

  console.log({ currentLanguage })
  console.log({ nodeRef })

  return (
    <div className='relative' ref={nodeRef}>
      <div className='mb-auto group'>
        <div className='flex flex-col mt-[-5px] items-start justify-start'>
          {i18n.language === 'en' ? <span className='text-[12px]'>Eg</span> : <span className='text-[12px]'>Vn</span>}

          <div className='cursor-pointer'>
            <GrLanguage className='duration-300 cursor-pointer group hover:opacity-75' />
          </div>
        </div>

        <ul className='absolute right-0 mt-[-8px] text-black transition-all duration-300 ease-in-out transform scale-95 bg-white dark:bg-[#161421] rounded-lg shadow-lg opacity-0 w-max top-12 group-hover:opacity-100 group-hover:scale-100'>
          <li
            className='hover:bg-slate-50 p-2 text-sm dark:hover:bg-[#1e1d2b] duration-300 rounded-lg dark:text-neutral-300 cursor-pointer'
            onClick={() => handleChangeLanguage('vi')}
          >
            <span>Vietnamese</span>
          </li>
          <li
            className='hover:bg-slate-50 p-2 text-sm dark:hover:bg-[#212030] duration-300 rounded-lg dark:text-neutral-300 cursor-pointer'
            onClick={() => handleChangeLanguage('en')}
          >
            <span>English</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MultilingualComponent
