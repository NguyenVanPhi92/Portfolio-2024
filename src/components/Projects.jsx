import { PROJECTS } from '../constants'
import TitleComponents from './Title'

const ProjectsComponent = () => {
    return (
        <div className='dark:border-b dark:border-neutral-900 pb-4' id='projects'>
            <TitleComponents title='Projects' />

            <div>
                {PROJECTS.map((pj, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-60 relative mx-auto h-auto overflow-hidden rounded-lg '>
                            <img
                                src={pj.image}
                                alt={pj.title}
                                width={150}
                                height={150}
                                className='w-full h-48 relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100 cursor-pointer'
                            />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold text-neutral-700 dark:text-neutral-300'>
                                {pj.title}
                            </h6>
                            <p className='mb-4 text-neutral-700 dark:text-neutral-400'>
                                {pj.description}
                            </p>

                            {pj.technologies.map((tech, idx) => (
                                <span
                                    className='mr-2 rounded bg-neutral-700 dark:bg-neutral-800 px-2 py-1 text-sm font-medium text-neutral-300 dark:text-neutral-400'
                                    key={idx}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsComponent
