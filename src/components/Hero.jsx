import { motion } from 'framer-motion'
import { CiSaveDown2 } from 'react-icons/ci'
import cv from '../assets/cv.pdf'
import profile from '../assets/hero.jpg'

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
        <div className='dark:border-b dark:border-neutral-900 pb-4 lg:mb-36' id='home'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0.1)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-neutral-700 dark:text-neutral-400'
                        >
                            <span className='font-semibold bg-gradient-to-r from-emerald-600 via-slate-500 to-teal-700 bg-clip-text tracking-tight text-transparent'>
                                Felly
                            </span>{' '}
                            Nguyen
                        </motion.h1>
                        <motion.span
                            variants={container(0.3)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r text-4xl dark:text-neutral-400 text-neutral-700'
                        >
                            Web Developer
                        </motion.span>
                        <motion.p
                            variants={container(0.6)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light tracking-tighter dark:text-neutral-400 text-neutral-700'
                        >
                            With the desire to explore and learn technology, I want to create value
                            for life to help people and businesses with the software solutions I
                            create.
                        </motion.p>
                    </div>

                    <a
                        href={cv}
                        className='bg-emerald-600 hover:bg-emerald-400 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-neutral-100 dark:text-neutral-300 px-2 py-2 rounded-lg w-max flex items-center gap-1'
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
                            src={profile}
                            alt='profile'
                            className='rounded-2xl object-cover shadow-lg border border-gray-300'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
