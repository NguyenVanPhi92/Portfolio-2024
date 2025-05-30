import { BiLogoTypescript } from 'react-icons/bi'
import { FaHtml5, FaSass } from 'react-icons/fa'
import { FaSquareJs } from 'react-icons/fa6'
import { IoLogoCss3 } from 'react-icons/io5'
import { RiNextjsFill, RiReactjsLine } from 'react-icons/ri'
import { SiShadcnui } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
// Import Swiper React components
import { BsTrello } from 'react-icons/bs'
import { CgFigma } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'
import { LuCookie } from 'react-icons/lu'
import { SiJsonwebtokens, SiPostman, SiReacthookform, SiReactquery, SiRedux, SiTailwindcss } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { useTranslation } from 'react-i18next'
import { MdHttp } from 'react-icons/md'
import { Autoplay } from 'swiper/modules'
import TitleComponents from './Title'

const TechnologiesComponent = () => {
  const { t } = useTranslation('technologies')

  //slider
  return (
    <div className='pb-10' id='5'>
      <TitleComponents
        // title='Technologies & '
        title={t('technologies_translate.title')}
        // subTitle='Tools'
      />

      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        // centeredSlides={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
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
          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <FaHtml5 className='m-auto text-4xl text-[#ff5733]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <IoLogoCss3 className='m-auto text-4xl text-[#1B79B8]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <FaSass className='m-auto text-4xl text-[#CF649A]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiTailwindcss className='m-auto text-4xl text-[#07B6D4]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <FaSquareJs className='m-auto text-4xl text-[#F6CF02]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <BiLogoTypescript className='m-auto text-4xl text-[#3074C0]' />
          </SwiperSlide>

          <SwiperSlide className='p-4 border rounded-2xl w-max dark:border-neutral-800'>
            <RiReactjsLine className='m-auto text-4xl text-[#38C1D7]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <RiNextjsFill className='m-auto text-4xl text-slate-900 dark:text-white-100' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiRedux className='m-auto text-4xl text-[#7348B5]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiReactquery className='m-auto text-4xl text-[#FF4154]' />
          </SwiperSlide>

          {/* <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
                        <IoLogoFirebase className='m-auto text-4xl text-[#F7C52A]' />
                    </SwiperSlide> */}

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <MdHttp className='m-auto text-4xl text-slate-900 dark:text-white-100' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiShadcnui className='m-auto text-4xl text-slate-900 dark:text-white-100' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <LuCookie className='m-auto text-4xl text-slate-900 dark:text-white-100' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiJsonwebtokens className='m-auto text-4xl text-[#D038F6]' />
          </SwiperSlide>

          <SwiperSlide className='py-4 border rounded-2xl w-max dark:border-neutral-800'>
            <SiReacthookform className='m-auto text-4xl text-[#F03C69]' />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='flex items-center justify-center w-full gap-4'>
        <VscVscode className='text-4xl text-cyan-600' />
        <FaGithub className='text-4xl text-slate-700 dark:text-white-100' />
        <SiPostman className='text-4xl text-orange-500' />
        <FaGitAlt className='text-4xl text-amber-500' />
        <CgFigma className='text-4xl text-rose-500' />
        <BsTrello className='text-4xl text-cyan-600' />
      </div>
    </div>
  )
}

export default TechnologiesComponent
