import { LiaUniversitySolid } from 'react-icons/lia'
import TitleComponents from './Title'
import { useTranslation } from 'react-i18next'
const EducationComponent = () => {
  const { t } = useTranslation('education')
  return (
    <div id='education'>
      <TitleComponents title={t('education_translate.title')} />
      <div
        className='flex m-auto rounded-xl p-6 bg-slate-100 bg-opacity-55 dark:bg-opacity-90 dark:border text-neutral-800 dark:text-neutral-300 dark:border-neutral-800 border-neutral-400 dark:bg-[#0B001C] gap-10 mt-6 w-4/5 shadow-[rgba(0,_0,_0,_0.24)_0px_0.1px_2px]
             dark:shadow-inner'
      >
        <div className='px-6 py-2 border-l border-neutral-400 dark:border-neutral-800'>
          <div className='relative mb-6'>
            <div className='dark:bg-[#0B001C] absolute p-2 top-[-8px] left-[-44px]'>
              <LiaUniversitySolid className='text-2xl text-neutral-500' />
            </div>
            <p>9/2020 - 12/2022</p>
            <h3 className='text-2xl font-bold'>SaiGon College</h3>
            <p>
              <span>Computer Programming </span> -{' '}
              <a
                href='https://truongcaodangsaigon.edu.vn/'
                target='_blank'
                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
              >
                caodangsaigon
              </a>
            </p>
            <p>GPA: 3.24</p>
          </div>

          <div className='relative'>
            <div className='dark:bg-[#0B001C] absolute p-2 top-[-8px] left-[-44px]'>
              <LiaUniversitySolid className='text-2xl text-neutral-500' />
            </div>
            <p>2022 - Present</p>
            <h3 className='text-2xl font-bold'>Online Engineering Courses</h3>
            <p>
              <span>ReactJs Supper </span> -{' '}
              <a
                href='https://duthanhduoc.com/'
                target='_blank'
                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
              >
                duthanhduoc (Senior Frontend)
              </a>
            </p>

            <p>
              <span>React basic to advanced </span> -{' '}
              <a
                href='https://evon.dev/'
                target='_blank'
                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
              >
                evondev (Senior Frontend)
              </a>
            </p>

            {/* <p>
                            <span>PHP Laravel</span> -{' '}
                            <a
                                href='https://www.udemy.com/course/laravel-learning-management-system'
                                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
                            >
                                Kazi-Ariyan
                            </a>
                        </p> */}

            <p>
              <span>Debugging Technique</span> -{' '}
              <a
                href='https://hoidanit.vn/'
                target='_blank'
                className='underline text-[14px] text-cyan-700 hover:text-cyan-600'
              >
                hoidanit
              </a>
            </p>
          </div>
        </div>

        <div className='relative px-6 py-2 border-l border-neutral-400 dark:border-neutral-800'>
          <div className='dark:bg-[#0B001C] absolute p-2 text-2xl top-0 left-[-20px]'>
            <LiaUniversitySolid className='text-2xl text-neutral-500' />
          </div>
          <p>10/2024 - Present</p>
          <h3 className='text-2xl font-bold'>English center</h3>
          <p>
            <span>Ielts Fighter</span> -{' '}
            <a
              href='https://ielts-fighter.com/'
              target='_blank'
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
