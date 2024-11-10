import { useTranslation } from 'react-i18next'
import { PROJECTS } from '../constants'
import TitleComponents from './Title'

const ProjectsComponent = () => {
    const { t } = useTranslation('project')

    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='projects'>
            <TitleComponents
                title={t('project_translate', {
                    returnObjects: true
                }).map(
                    (item) =>
                        // item.title: 'My Projects' || 'Các Dự Án Của Tôi'
                        item.title?.split(' ').length > 2
                            ? // VI: lấy ra: các dự án
                              item.title?.split(' ').slice(0, 3).toString().split(',').join(' ')
                            : item.title?.split(' ')[0] // EN: lấy ra: My
                )}
                subTitle={t('project_translate', {
                    returnObjects: true
                }).map(
                    (item) =>
                        // item.title: 'My Projects' || 'Các Dự Án Của Tôi'
                        item.title?.split(' ').length > 2
                            ? // VI: lấy ra: của tôi
                              item.title
                                  ?.split(' ')
                                  .slice(3, item.title?.split(' ').length)
                                  .toString()
                                  .split(',')
                                  .join(' ')
                            : item.title?.split(' ')[1] // EN: lấy ra: Projects
                )}
            />

            {/* V1 */}
            <div className='w-full'>
                {PROJECTS.map((pj, index) => (
                    <div key={index} className='grid grid-flow-col mb-8'>
                        <div className='relative h-auto mx-auto overflow-hidden rounded-lg w-60 '>
                            <img
                                src={pj.pop_up}
                                alt={pj.title}
                                width={150}
                                height={150}
                                className='relative z-0 object-cover w-full h-48 transition-all duration-300 scale-110 rounded-lg cursor-pointer hover:scale-100'
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

                            <p className='mt-4'>
                                <span className='text-neutral-700 dark:text-neutral-400'>
                                    Repo:{' '}
                                </span>
                                <a
                                    href={pj.git}
                                    target='_blank'
                                    className='underline blur-sm hover:blur-none transition duration-300 text-[14px] text-cyan-800 '
                                >
                                    {pj.git}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* V2 */}
            {/* <div className='grid grid-cols-4 gap-4'>
                {PROJECTS.map((pj, index) => (
                    <div key={index} className='overflow-hidden rounded shadow-lg'>
                        <img className='w-full' src={pj.pop_up} alt='Sunset in the mountains' />
                        <div className='px-6 py-4'>
                            <div className='mb-2 text-xl font-bold text-gray-700'>{pj.title} </div>
                            <p className='text-sm text-gray-700'>{pj.description}</p>
                        </div>
                        <div className='px-6 pt-4 pb-2'>
                            {pj.technologies.length <= 5
                                ? pj.technologies.map((i, idx) => (
                                      <span
                                          key={idx}
                                          className='inline-block px-3 py-1 mb-2 mr-2 text-[12px] font-semibold text-gray-700 bg-gray-200 rounded-full'
                                      >
                                          {i}
                                      </span>
                                  ))
                                : pj.technologies.map((a, b) =>
                                      b < 5 ? (
                                          <span
                                              key={b}
                                              className='inline-block px-3 py-1 mb-2 mr-2 text-[12px] font-semibold text-gray-700 bg-gray-200 rounded-full'
                                          >
                                              #{a} {b === 4 ? '...' : null}
                                          </span>
                                      ) : null
                                  )}
                        </div>
                    </div>
                ))}
            </div> */}

            {/* Pagination */}
            {/* <nav className='mt-4 text-center'>
                <ul className='inline-flex -space-x-px text-sm'>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            aria-current='page'
                            className='flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default ProjectsComponent
