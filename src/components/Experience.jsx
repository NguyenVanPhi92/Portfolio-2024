import { EXPERIENCES } from '../constants'
import TitleComponents from './Title'

const ExperienceComponent = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <TitleComponents title='Experience' />

            <div>
                {EXPERIENCES.map((item, idx) => (
                    <div className='mb-8 flex flex-wrap lg:justify-center' key={idx}>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-[18px] text-neutral-400'>{item.year}</p>
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4:'>
                            <h6 className='mb-2 font-semibold'>
                                {item.role} -{' '}
                                <span className='text-base font-semibold text-teal-700'>
                                    {item.company}
                                </span>
                            </h6>
                            <p className='mb-4 font-light text-sm text-neutral-400'>
                                {item.description}
                            </p>

                            {item.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className='mr-2 mt-4 rounded-md bg-neutral-800 text-neutral-400 px-2 py-1 text-sm font-medium'
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

export default ExperienceComponent
