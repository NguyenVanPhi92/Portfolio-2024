import { PROJECTS } from '../constants'
import TitleComponents from './Title'

const ProjectsComponent = () => {
    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='projects'>
            <TitleComponents title='Projects' />

            <div className='w-full'>
                {PROJECTS.map((pj, index) => (
                    <div key={index} className='grid grid-flow-col mb-8'>
                        <div className='relative h-auto mx-auto overflow-hidden rounded-lg w-60 '>
                            <img
                                src={pj.image}
                                alt={pj.title}
                                width={150}
                                height={150}
                                className='relative z-0 w-full h-48 transition-all duration-300 scale-110 rounded-lg cursor-pointer hover:scale-100'
                            />
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold text-neutral-700 dark:text-neutral-300'>
                                <a href={pj.link} target='_blank'>
                                    {pj.title}
                                </a>
                            </h6>
                            <p className='mb-4 text-neutral-700 dark:text-neutral-400'>
                                {pj.description}
                            </p>

                            <div className='flex flex-wrap w-full gap-2'>
                                {pj.technologies.map((tech, idx) => (
                                    <span
                                        className='block px-2 py-1 text-sm font-medium rounded w-max bg-neutral-700 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-300'
                                        key={idx}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsComponent
