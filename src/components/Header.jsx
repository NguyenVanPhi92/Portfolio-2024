import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import { FaLinkedinIn } from 'react-icons/fa'
import { LuGithub } from 'react-icons/lu'
import DarkModeComponent from './DarkMode'
import MultilingualComponent from './Multilingual'

const HeaderComponent = () => {
    return (
        <nav className='fixed mb-8 w-full z-20 top-0 start-0 border-b border-gray-800 '>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex flex-shrink-0 items-center'>
                    {/* <img className='mx-2 w-10' src={logo} alt='logo' /> */}
                    <h2 className='mx-2 font-bold font-mono text-3xl bg-gradient-to-r from-emerald-600 via-slate-500 to-teal-700 bg-clip-text tracking-tight text-transparent w-28'>
                        NVP.
                    </h2>
                </div>

                <div className='flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-[16px] gap-[2px]'>
                    <div className='mr-8 flex gap-1'>
                        <FaLinkedinIn className='hover:text-teal-500 cursor-pointer' />
                        <FaFacebookF className='hover:text-teal-500 cursor-pointer' />
                        <LuGithub className='hover:text-teal-500 cursor-pointer' />
                        <BsTwitterX className='hover:text-teal-500 cursor-pointer' />
                    </div>

                    <div className='flex items-center'>
                        <DarkModeComponent />
                        <MultilingualComponent />
                    </div>
                </div>

                <div
                    className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='navbar-sticky'
                >
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-2 rounded md:bg-transparent hover:text-teal-500 md:p-0 text-neutral-400'
                                aria-current='page'
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Technology
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Experience
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Education
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Interest
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-neutral-400 rounded  hover:text-teal-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent
