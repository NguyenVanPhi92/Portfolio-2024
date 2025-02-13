import AboutComponent from '@components/About'
import MessWidget from '@components/chat/MessWidget'
import TelegramWidget from '@components/chat/TelegramWidget'
import ZaloChatWidget from '@components/chat/ZaloChatWidget'
import ContactComponent from '@components/Contact'
import EducationComponent from '@components/Education'
import ExperienceComponent from '@components/Experience'
import HeaderComponent from '@components/Header'
import HeroComponent from '@components/Hero'
import InterestComponent from '@components/Interest'
import ProjectsComponent from '@components/Projects'
import ScrollToTop from '@components/ScrollToTop'
import TechnologiesComponent from '@components/Technologies'
import TheEndComponent from '@components/TheEnd'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function MyPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <div
      onCopy={(e) => {
        e.preventDefault()
        alert('Không được sao chép văn bản này!')
      }}
      onDoubleClick={(e) => {
        e.preventDefault()
        alert('Không được sao chép văn bản này!')
      }}
      className='overflow-hidden antialiased select-none text-neutral-300 selection:text-white'
    >
      {/* animation progress */}
      <motion.div
        className='fixed top-0 left-0 right-0 z-30 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        style={{ scaleX, transformOrigin: '0%' }}
      />

      <div className='mb-40'>
        <HeaderComponent />
      </div>

      {/* all page */}
      <div className='w-10/12 mx-auto'>
        <HeroComponent />
        <AboutComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <TechnologiesComponent />
        <EducationComponent />
        <InterestComponent />
        <ContactComponent />
        <TheEndComponent />
      </div>

      <ScrollToTop />
      <TelegramWidget />
      <MessWidget />
      <ZaloChatWidget />
      {/* // Automatically scrolls to top whenever pathname changes */}
      {/* <ScrollToTop /> */}
    </div>
  )
}
