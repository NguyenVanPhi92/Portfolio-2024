import { RiReactjsLine } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'
// Import Swiper React components
import { CgFigma } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'
import { SiPostman } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper/modules'
import TitleComponents from './Title'

const TechnologiesComponent = () => {
    //slider
    return (
        <div className='dark:border-b dark:border-neutral-900 pb-4' id='technology'>
            <TitleComponents title='Technologies' />

            <Swiper
                slidesPerView={10}
                spaceBetween={10}
                // centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                pagination={
                    {
                        // clickable: true
                    }
                }
                // navigation={true}
                modules={[Autoplay]}
                className='flex flex-wrap items-center justify-center gap-4 w-[800px] mb-8'
            >
                {Array.from({ length: 30 }, (v, i) => i).map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='rounded-2xl border w-max dark:border-neutral-800 p-4'>
                            <RiReactjsLine className='text-4xl text-cyan-400' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex justify-center items-center gap-4 w-full'>
                <VscVscode className='text-4xl text-cyan-600' />
                <FaGithub className='text-4xl text-slate-700' />
                <SiPostman className='text-4xl text-orange-500' />
                <FaGitAlt className='text-4xl text-amber-500' />
                <CgFigma className='text-4xl text-rose-500' />
            </div>
        </div>
    )
}

export default TechnologiesComponent
