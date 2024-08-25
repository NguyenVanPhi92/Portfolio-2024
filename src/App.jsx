import { useEffect, useState } from 'react'
import './App.css'
import AboutComponent from './components/About'
import ContactComponent from './components/Contact'
import EducationComponent from './components/Education'
import ExperienceComponent from './components/Experience'
import HeaderComponent from './components/Header'
import HeroComponent from './components/Hero'
import InterestComponent from './components/Interest'
import ProjectsComponent from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import TechnologiesComponent from './components/Technologies'
import TheEndComponent from './components/TheEnd'

function App() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        } else {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
        /**
         * selection:text-cyan-300 selection:bg-cyan-300
         * click text auto blue
         */
        <div className='overflow-hidden text-neutral-300 antialiased selection:text-cyan-300 selection:bg-cyan-300'>
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className='absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
            </div>

            <div className='mb-40'>
                <HeaderComponent darkMode={handleThemeSwitch} theme={theme} />
            </div>

            <div className='w-10/12 mx-auto px-8'>
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
            {/* // Automatically scrolls to top whenever pathname changes */}
            {/* <ScrollToTop /> */}
        </div>
    )
}

export default App
