import { RiReactjsLine } from 'react-icons/ri'
// Import Swiper React components
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
        <div className='border-b border-neutral-800 pb-4'>
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
                        <div className='rounded-2xl border w-max border-neutral-800 p-4'>
                            <RiReactjsLine className='text-4xl text-cyan-400' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TechnologiesComponent
