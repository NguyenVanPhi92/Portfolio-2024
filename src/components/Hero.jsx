import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CiSaveDown2 } from 'react-icons/ci'
import heroImg from '../assets/pic/hero/hero-img.png'
import { useState } from 'react'
import Modal from './Modal'
import cv_en from '../assets/cv/cv_en.pdf'
import cv_vi from '../assets/cv/cv_vi.pdf'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

const HeroComponent = () => {
    const { t } = useTranslation('hero')
    const [open, setOpen] = useState(false)

    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900 lg:mb-36' id='home'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0.1)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-neutral-700 dark:text-neutral-400'
                        >
                            <span className='font-semibold tracking-tight text-transparent bg-gradient-to-r from-emerald-600 via-slate-500 to-teal-700 bg-clip-text'>
                                {t('hero_translate.title')}.
                            </span>{' '}
                            {/* Nguyen */}
                        </motion.h1>
                        <motion.span
                            variants={container(0.3)}
                            initial='hidden'
                            animate='visible'
                            className='text-4xl bg-gradient-to-r dark:text-neutral-300 text-neutral-700'
                        >
                            Van Phi Nguyen
                        </motion.span>
                        <motion.p
                            variants={container(0.6)}
                            initial='hidden'
                            animate='visible'
                            className='max-w-xl py-6 my-2 font-light tracking-tighter dark:text-neutral-300 text-neutral-700'
                        >
                            {t('hero_translate.desc')}.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className='flex items-center gap-1 px-2 py-2 rounded-lg cursor-pointer bg-emerald-600 hover:bg-emerald-400 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-neutral-100 dark:text-neutral-200 w-max'
                        onClick={() => setOpen(true)}
                    >
                        Resume
                        <CiSaveDown2 />
                    </motion.button>
                </div>

                <div className='w-full lg:w-1/2 lg:-8'>
                    <div className='flex justify-center h-4/5 '>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            src={heroImg}
                            alt='profile'
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='w-48 mx-auto my-4'>
                    <h3 className='text-lg font-semibold text-center text-gray-800'>
                        Chọn CV để xem
                    </h3>

                    {/* CV */}
                    <div className='flex justify-center my-8'>
                        <a
                            target='_blank'
                            href={cv_en}
                            onClick={() => setOpen(false)}
                            className='px-4 py-2 mr-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400'
                        >
                            English
                        </a>
                        <a
                            target='_blank'
                            href={cv_vi}
                            onClick={() => setOpen(false)}
                            className='px-4 py-2 text-white rounded-lg bg-emerald-600 hover:bg-emerald-400 dark:bg-emerald-700'
                        >
                            Vietnamese
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HeroComponent
