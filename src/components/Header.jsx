import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { LuGithub } from 'react-icons/lu'
import { MdOutlineMenu } from 'react-icons/md'
import { Link } from 'react-scroll'
import logoDark from '../assets/pic/logos/logo-dark.png'
import logoLight from '../assets/pic/logos/logo-light.png'
import { MyContext } from '../contexts/app.context'
import DarkModeComponent from './DarkMode'
import MultilingualComponent from './Multilingual'
import { IoClose } from 'react-icons/io5'

const HeaderComponent = () => {
  const { darkMode: theme } = useContext(MyContext)
  const { t } = useTranslation('navbar')
  const [showNav, setShowNav] = useState(false)

  return (
    <header className='w-full px-4 header'>
      <div className='flex flex-wrap items-center justify-between mx-auto header-wrapper'>
        {/* logo */}
        <div className='logo'>
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt='logo'
            width={50}
            className='rounded-sm cursor-pointer img'
          />
          <div className='menu-icon'>
            <MdOutlineMenu onClick={() => setShowNav((value) => !value)} />
          </div>
        </div>

        {/* Icons */}
        <div className='flex header-wrapper__icons justify-center items-center md:order-2 space-x-3 md:space-x-0 text-[16px] gap-[2px]'>
          <div className='flex gap-1 mr-8 icons_social text-neutral-700 dark:text-neutral-300'>
            <a href='https://www.linkedin.com/in/phinguyen98/' target='_blank'>
              <FaLinkedinIn className='cursor-pointer hover:text-teal-500' />
            </a>
            <a href='https://www.facebook.com/aotisnguyen' target='_blank'>
              <FaFacebookF className='cursor-pointer hover:text-teal-500' />
            </a>
            <a href='https://github.com/NguyenVanPhi92' target='_blank'>
              <LuGithub className='cursor-pointer hover:text-teal-500' />
            </a>
            <a href='https://github.com/NguyenVanPhi92' target='_blank'>
              <BsTwitterX className='cursor-pointer hover:text-teal-500' />
            </a>
          </div>

          <div className='flex items-center icons_setting text-neutral-700 dark:text-neutral-300'>
            <DarkModeComponent />
            <MultilingualComponent />
          </div>
        </div>

        {/* Menu PC */}
        <nav
          className='items-center border border-[#e5e5e5] dark:border-[#1f1f3b] z-50 rounded-full fixed top-4 p-4 left-[25%] backdrop-blur-lg shadow-sm justify-between hidden w-full header-wrapper__menu md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:space-x-4 xl:space-x-8 xl:rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            {t('navbar_translate', {
              returnObjects: true
            }).map((item, index) => (
              <li className='relative cursor-pointer group' key={index}>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  //   onSetActive={handleSetActive}
                  to={item.path}
                  className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                  aria-current='pag'
                >
                  {item.title}
                </Link>
                <p className='absolute w-full h-[1px] bg-gradient-to-r from-blue-600 to-[#11926E] to-50% scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile */}
        <nav
          className={`fixed top-0 duration-300 left-0 z-50 h-full xl:hidden dark:shadow-[#171737] shadow-sm backdrop-blur-lg ${
            showNav ? 'translate-x-[0%]' : '-translate-x-[100%]'
          }`}
        >
          <p className='absolute top-0 right-0 p-2 cursor-pointer' onClick={() => setShowNav((value) => !value)}>
            <IoClose />
          </p>
          <ul className='px-4 mt-4'>
            {t('navbar_translate', {
              returnObjects: true
            }).map((item, index) => (
              <li className='cursor-pointer group' key={index}>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  to={item.path}
                  className='block px-4 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                  aria-current='pag'
                >
                  {item.title}
                  <p className='absolute w-[50%] h-[1px] bg-gradient-to-r from-blue-600 to-[#11926E] to-50% scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
