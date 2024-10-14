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
    return (
        /**
         * selection:text-cyan-300 selection:bg-cyan-300
         * click text auto blue
         */
        <div className='overflow-hidden antialiased text-neutral-300 selection:text-white selection:bg-green-800'>
            <div className='fixed top-0 w-full h-full -z-10'>
                <div className='absolute top-0 z-[-2] h-screen w-screen dark:bg-[#0B001C] '></div>
                {/* <div className='absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div> */}
            </div>

            <div className='mb-40'>
                <HeaderComponent />
            </div>

            {/* all page */}
            <div className='w-10/12 px-8 mx-auto'>
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
