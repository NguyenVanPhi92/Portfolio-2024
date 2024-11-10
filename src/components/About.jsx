import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import aboutImg from '../assets/pic/about/about-img.jpg'
import TitleComponents from './Title'
const AboutComponent = () => {
    const { t } = useTranslation('about')
    console.log()

    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='about'>
            <TitleComponents
                title={t('about_translate.title').split(' ')[0]}
                subTitle={t('about_translate.title').split(' ')[1]}
            />

            <div className='flex flex-wrap justify-center'>
                <div className='w-[400px] lg:p-8'>
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
                        <p className='max-w-xl py-4 my-2 text-neutral-700 dark:text-neutral-300 dark:font-light'>
                            {t('about_translate.desc')}.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
