import { RiReactjsLine } from 'react-icons/ri'
// import { FaHtml5 } from "react-icons/fa";
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
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='technology'>
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
                        <div className='p-4 border rounded-2xl w-max dark:border-neutral-800'>
                            <RiReactjsLine className='text-4xl text-cyan-400' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex items-center justify-center w-full gap-4'>
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
