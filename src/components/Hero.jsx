import { motion } from 'framer-motion'
import profile from '../assets/kevinRushProfile.png'
import { HERO_CONTENT } from '../constants'

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
        <div className='border-b border-neutral-900 pb-4 lg:mb-36 '>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0.1)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
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
                            className='bg-gradient-to-r text-4xl text-neutral-400'
                        >
                            Web Developer
                        </motion.span>
                        <motion.p
                            variants={container(0.6)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400'
                        >
                            With the desire to explore and learn technology, I want to create value
                            for life to help people and businesses with the software solutions I
                            create.
                        </motion.p>
                    </div>

                    <button className='bg-emerald-700 hover:bg-emerald-600 px-2 py-2 rounded-lg'>
                        Download CV
                    </button>
                </div>

                <div className='w-full lg:w-1/2 lg:-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            src={profile}
                            alt='profile'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
