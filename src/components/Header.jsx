import { useContext } from 'react'
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

const HeaderComponent = () => {
  const { darkMode: theme } = useContext(MyContext)
  const { t } = useTranslation('navbar')

  return (
    <header className='px-4 w-full z-20 header top-0 start-0 border-b dark:border-none dark:backdrop-blur-lg shadow-md dark:shadow-[#1f1f3b]'>
      <div className='flex flex-wrap items-center justify-between mx-auto header-wrapper'>
        {/* logo */}
        <div className='flex items-center flex-shrink-0 logo'>
          <h2 className='font-mono text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-emerald-600 via-slate-500 to-teal-700 bg-clip-text w-28'>
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt='logo'
              width={50}
              className='rounded-sm cursor-pointer img'
            />
          </h2>
          <div className='menu-icon'>
            <MdOutlineMenu />
          </div>
        </div>

        {/* Icons */}
        <div className='flex header-wrapper__icons justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-[16px] gap-[2px]'>
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

        {/* Menu */}
        <nav
          className='items-center justify-between hidden w-full header-wrapper__menu md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:space-x-4 xl:space-x-8 xl:rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='home'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.home')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>

            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='about'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.about')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='experience'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.experience')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='projects'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.project')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='technology'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.technologies')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>

            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='education'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.education')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='interest'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.interest')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>

            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                //   onSetActive={handleSetActive}
                to='contact'
                className='block px-2 py-2 rounded md:bg-transparent md:p-0 dark:text-neutral-300 text-neutral-700'
                aria-current='pag'
              >
                {t('navbar_translate.contact')}
              </Link>
              <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
