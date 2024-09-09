import { EXPERIENCES } from '../constants'
import TitleComponents from './Title'

const ExperienceComponent = () => {
    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='experience'>
            <TitleComponents title='Experience' />

            <div>
                {EXPERIENCES.map((item, idx) => (
                    <div className='flex flex-wrap mb-8 lg:justify-center' key={idx}>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-[18px] text-neutral-700 dark:text-neutral-300'>
                                {item.year}
                            </p>
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4:'>
                            <h6 className='mb-2 font-semibold text-neutral-700 dark:text-neutral-300'>
                                {item.role} -{' '}
                                <span className='text-base font-semibold text-teal-700 dark:text-teal-500'>
                                    {item.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-sm font-light text-neutral-700 dark:text-neutral-400'>
                                {item.description}
                            </p>

                            {item.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded-md bg-neutral-700 dark:bg-neutral-800 text-neutral-300 '
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
