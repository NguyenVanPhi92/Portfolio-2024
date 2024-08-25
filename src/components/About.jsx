import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import TitleComponents from './Title'
const AboutComponent = () => {
    return (
        <div className='dark:border-b dark:border-neutral-900 pb-4' id='about'>
            <TitleComponents title='About' subTitle='Me' />

            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='flex items-center justify-center'
                    >
                        <img className='rounded-2xl' src={aboutImg} alt='aboutImg' />
                    </motion.div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <motion.div
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        initial={{ opacity: 0, x: 100 }}
                        className='flex justify-center lg:justify-start'
                    >
                        <p className='my-2 max-w-xl py-4 text-neutral-700 dark:font-light'>
                            {ABOUT_TEXT}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
