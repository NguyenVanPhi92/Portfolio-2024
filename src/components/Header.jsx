import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { LuGithub } from 'react-icons/lu'
import DarkModeComponent from './DarkMode'
import MultilingualComponent from './Multilingual'
import { Link } from 'react-scroll'

const HeaderComponent = (props) => {
    return (
        <nav className='fixed px-4 w-full z-20 top-0 start-0 border-b dark:border-none bg-slate-50 dark:bg-[#1D1C2A] shadow-md dark:shadow-[#171721]'>
            <div className='flex flex-wrap items-center justify-between mx-auto'>
                {/* logo */}
                <div className='flex flex-shrink-0 items-center'>
                    <h2 className='font-bold font-mono text-3xl bg-gradient-to-r from-emerald-600 via-slate-500 to-teal-700 bg-clip-text tracking-tight text-transparent w-28'>
                        NVP.
                    </h2>
                </div>

                {/* Icons */}
                <div className='flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-[16px] gap-[2px]'>
                    <div className='mr-8 flex gap-1 text-neutral-700 dark:text-neutral-400'>
                        <a href='https://www.linkedin.com/in/phinguyen98/' target='_blank'>
                            <FaLinkedinIn className='hover:text-teal-500 cursor-pointer' />
                        </a>
                        <a href='https://www.facebook.com/aotisnguyen' target='_blank'>
                            <FaFacebookF className='hover:text-teal-500 cursor-pointer' />
                        </a>
                        <a href='https://github.com/NguyenVanPhi92' target='_blank'>
                            <LuGithub className='hover:text-teal-500 cursor-pointer' />
                        </a>
                        <a href='https://github.com/NguyenVanPhi92' target='_blank'>
                            <BsTwitterX className='hover:text-teal-500 cursor-pointer' />
                        </a>
                    </div>

                    <div className='flex items-center text-neutral-700 dark:text-neutral-400'>
                        <DarkModeComponent darkMode={props.darkMode} theme={props.theme} />
                        <MultilingualComponent />
                    </div>
                </div>

                {/* Menu */}
                <div
                    className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='navbar-sticky'
                >
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='home'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Home
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>

                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='about'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                About
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='technology'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Technologies
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='experience'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Experience
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='projects'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Projects
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='education'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Education
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='interest'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Interest
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>

                        <li className='relative group cursor-pointer'>
                            <Link
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                //   onSetActive={handleSetActive}
                                to='contact'
                                className='block py-2 px-2 rounded md:bg-transparent md:p-0 dark:text-neutral-400 text-neutral-700'
                                aria-current='pag'
                            >
                                Contact
                            </Link>
                            <p className='absolute w-full h-[1px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform ease-linear'></p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent
