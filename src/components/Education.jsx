import { LiaUniversitySolid } from 'react-icons/lia'
import TitleComponents from './Title'
const EducationComponent = () => {
    return (
        <div id='education'>
            <TitleComponents title='Education' />
            <div
                className='flex m-auto rounded-xl p-6 dark:border text-neutral-700 dark:text-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 gap-10 mt-6 w-4/5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
             dark:shadow-inner'
            >
                <div className='px-6 py-2 border-l border-neutral-800 dark:border-neutral-700'>
                    <div className='relative mb-6'>
                        <div className='dark:bg-neutral-950 bg-white absolute p-2 top-[-8px] left-[-44px]'>
                            <LiaUniversitySolid className='text-2xl text-neutral-500' />
                        </div>
                        <p>9/2020 - 12/2022</p>
                        <h3 className='text-2xl font-bold'>SaiGon College</h3>
                        <p>Computer Programming - GPA: 3.24</p>
                    </div>

                    <div className='relative'>
                        <div className='dark:bg-neutral-950 bg-white absolute p-2 top-[-8px] left-[-44px]'>
                            <LiaUniversitySolid className='text-2xl text-neutral-500' />
                        </div>
                        <p>2022 - Present</p>
                        <h3 className='text-2xl font-bold'>Online Engineering Courses</h3>
                        <p>
                            <span>ReactJs Supper </span> -{' '}
                            <a
                                href='https://duthanhduoc.com/'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                duthanhduoc (Senior Frontend)
                            </a>
                        </p>

                        <p>
                            <span>React basic to advanced </span> -{' '}
                            <a
                                href='https://evon.dev/'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                evondev (Senior Frontend)
                            </a>
                        </p>

                        <p>
                            <span>PHP Laravel</span> -{' '}
                            <a
                                href='https://www.udemy.com/course/laravel-learning-management-system'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                Kazi-Ariyan
                            </a>
                        </p>

                        <p>
                            <span>Debugging Technique</span> -{' '}
                            <a
                                href='https://hoidanit.vn/'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                hoidanit
                            </a>
                        </p>
                    </div>
                </div>

                <div className='relative px-6 py-2 border-l border-neutral-800 dark:border-neutral-700'>
                    <div className='dark:bg-neutral-950 bg-white absolute p-2 text-2xl top-0 left-[-20px]'>
                        <LiaUniversitySolid className='text-2xl text-neutral-500' />
                    </div>
                    <p>8/2024 - Present</p>
                    <h3 className='text-2xl font-bold'>English center</h3>
                    <p>
                        <span>Ielts Fighter</span> -{' '}
                        <a
                            href='#'
                            className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                        >
                            ielts-fighter.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EducationComponent
