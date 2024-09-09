import { motion } from 'framer-motion'
import { CiSaveDown2 } from 'react-icons/ci'
import cv from '../assets/cv.pdf'
// import profile from '../assets/hero.jpg'
import profile1 from '../../public/hero_setup.avif'

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
                                Welcome.
                            </span>{' '}
                            {/* Nguyen */}
                        </motion.h1>
                        <motion.span
                            variants={container(0.3)}
                            initial='hidden'
                            animate='visible'
                            className='text-4xl bg-gradient-to-r dark:text-neutral-300 text-neutral-700'
                        >
                            Felly Nguyen
                        </motion.span>
                        <motion.p
                            variants={container(0.6)}
                            initial='hidden'
                            animate='visible'
                            className='max-w-xl py-6 my-2 font-light tracking-tighter dark:text-neutral-300 text-neutral-700'
                        >
                            I am a Frontend Developer who has recently entered the job market, with
                            a focus on JavaScript and React a powerful framework for web development
                            created by Meta. Since 2021, I have been studying and working
                            extensively with ReactJS. Given my in-depth knowledge of this framework,
                            I am confident that I can effectively meet your needs.
                        </motion.p>
                    </div>

                    <a
                        href={cv}
                        className='flex items-center gap-1 px-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-400 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-neutral-100 dark:text-neutral-200 w-max'
                        download
                    >
                        Resume
                        <CiSaveDown2 />
                    </a>
                </div>

                <div className='w-full lg:w-1/2 lg:-8'>
                    <div className='flex justify-center h-4/5 '>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            src={profile1}
                            alt='profile'
                            className='object-cover shadow-lg rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
