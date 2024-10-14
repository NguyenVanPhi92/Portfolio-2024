import { BiLogoTypescript } from 'react-icons/bi'
import { FaHtml5, FaSass } from 'react-icons/fa'
import { FaSquareJs } from 'react-icons/fa6'
import { IoLogoCss3, IoLogoFirebase } from 'react-icons/io5'
import { RiNextjsFill, RiReactjsLine } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'
// Import Swiper React components
import { CgFigma } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'
import {
    SiJsonwebtokens,
    SiPostman,
    SiReacthookform,
    SiReactquery,
    SiRedux,
    SiTailwindcss
} from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { MdHttp } from 'react-icons/md'
import { Autoplay } from 'swiper/modules'
import TitleComponents from './Title'

const TechnologiesComponent = () => {
    //slider
    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='technology'>
            <TitleComponents title='Technologies & ' subTitle='Tools' />

            <Swiper
                slidesPerView={8}
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
                <div className='flex'>
                    <SwiperSlide className='p-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <RiReactjsLine className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <FaHtml5 className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <IoLogoCss3 className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <FaSquareJs className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <BiLogoTypescript className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <SiRedux className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <SiReactquery className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <RiNextjsFill className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <IoLogoFirebase className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <SiTailwindcss className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <FaSass className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <MdHttp className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <SiJsonwebtokens className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>

                    <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <SiReacthookform className='m-auto text-4xl text-cyan-400' />
                    </SwiperSlide>
                </div>
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
