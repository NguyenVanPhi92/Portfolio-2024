import { useTranslation } from 'react-i18next'
import img from '../assets/pic/projects/coming_soon.png'
import img1 from '../assets/pic/projects/coming_soon1.png'
import TitleComponents from './Title'
import { MyContext } from '../contexts/app.context'
import { useContext } from 'react'

const ProjectsComponent = () => {
  const { t } = useTranslation('project')
  const { darkMode: theme } = useContext(MyContext)

  return (
    <div className='pb-10 dark:border-neutral-900 dark:border-b' id='projects'>
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
                item.title?.split(' ').slice(3, item.title?.split(' ').length).toString().split(',').join(' ')
              : item.title?.split(' ')[1] // EN: lấy ra: Projects
        )}
      />

      <img src={`${theme === 'dark' ? img : img1}`} alt='' className='w-[600] h-[400px] m-auto' />
    </div>
  )
}

export default ProjectsComponent
