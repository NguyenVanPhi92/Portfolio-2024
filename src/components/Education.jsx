import { LiaUniversitySolid } from 'react-icons/lia'
import TitleComponents from './Title'
const EducationComponent = () => {
    return (
        <div>
            <TitleComponents title='Education' />
            <div className='flex m-auto rounded-xl p-6 border text-neutral-400 border-neutral-800 bg-neutral-950 gap-10 mt-6 w-4/5 shadow-inner'>
                <div className='border-l border-neutral-700 px-6 py-2'>
                    <div className='mb-6 relative'>
                        <div className='bg-neutral-950 absolute p-2 top-[-8px] left-[-44px]'>
                            <LiaUniversitySolid className=' text-neutral-500 text-2xl' />
                        </div>
                        <p>9/2020 - 12/2022</p>
                        <h3 className='font-bold text-2xl text-neutral-400'>SaiGon College</h3>
                        <p>Computer Programming - GPA: 3.24</p>
                    </div>

                    <div className='relative'>
                        <div className='bg-neutral-950 absolute p-2 top-[-8px] left-[-44px]'>
                            <LiaUniversitySolid className=' text-neutral-500 text-2xl' />
                        </div>
                        <p>2022 - Present</p>
                        <h3 className='font-bold text-2xl'>Online Engineering Courses</h3>
                        <p>
                            <span>ReactJs Supper</span> -{' '}
                            <a
                                href='#'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                duthanhduoc
                            </a>
                        </p>

                        <p>
                            <span>React basic to advanced</span> -{' '}
                            <a
                                href='#'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                evondev
                            </a>
                        </p>

                        <p>
                            <span>PHP Laravel</span> -{' '}
                            <a
                                href='#'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                Kazi-Ariyan
                            </a>
                        </p>

                        <p>
                            <span>Debugging Technique</span> -{' '}
                            <a
                                href='#'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                hoidanit
                            </a>
                        </p>
                        <p>
                            <span>ReactJs Supper</span> -{' '}
                            <a
                                href='#'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                DuThanhDuoc
                            </a>
                        </p>
                    </div>
                </div>

                <div className='border-l px-6 py-2 border-neutral-700 relative'>
                    <div className='bg-neutral-950 absolute p-2 text-2xl top-0 left-[-20px]'>
                        <LiaUniversitySolid className=' text-neutral-500 text-2xl' />
                    </div>
                    <p>8/2024 - Present</p>
                    <h3 className='font-bold text-2xl'>English center</h3>
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
