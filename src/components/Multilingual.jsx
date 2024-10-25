import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GrLanguage } from 'react-icons/gr'
import { LiaFlagUsaSolid } from 'react-icons/lia'
import { locales } from '../i18n/i18n'

const MultilingualComponent = () => {
    const { i18n } = useTranslation()
    const currentLanguage = locales[i18n.language]
    const [toggle, setToggle] = useState(false)
    const handleChangeLanguage = (lng) => {
        setToggle((_) => !_)
        i18n.changeLanguage(lng)
    }
    console.log(currentLanguage)

    return (
        <div className='relative'>
            <GrLanguage
                className='duration-300 cursor-pointer group hover:opacity-75'
                onClick={() => setToggle((_) => !_)}
            />
            {i18n.language === 'en' ? <LiaFlagUsaSolid /> : 'VN'}
            {toggle && (
                <ul className='absolute border shadow-md text-sm right-0 top-6 bg-white rounded-md dark:bg-[#272638] dark:border-slate-900'>
                    <li
                        className='hover:bg-slate-50 p-2 dark:hover:bg-[#212030] duration-300 cursor-pointer'
                        onClick={() => handleChangeLanguage('vi')}
                    >
                        <span>Vietnamese</span>
                    </li>
                    <li
                        className='hover:bg-slate-50 p-2 dark:hover:bg-[#212030] duration-300 cursor-pointer'
                        onClick={() => handleChangeLanguage('en')}
                    >
                        <span>English</span>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default MultilingualComponent
