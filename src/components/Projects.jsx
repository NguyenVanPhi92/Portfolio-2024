import { PROJECTS } from '../constants'
import TitleComponents from './Title'

const ProjectsComponent = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <TitleComponents title='Projects' />

            <div>
                {PROJECTS.map((pj, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img src={pj.image} alt={pj.title} width={150} height={150} />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{pj.title}</h6>
                            <p className='mb-4 text-neutral-400'>{pj.description}</p>

                            {pj.technologies.map((tech, idx) => (
                                <span
                                    className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium'
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
