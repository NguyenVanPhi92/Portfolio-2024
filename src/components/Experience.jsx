import { useTranslation } from 'react-i18next'
import TitleComponents from './Title'

const ExperienceComponent = () => {
    const { t } = useTranslation('experience')

    return (
        <div className='pb-4 dark:border-b dark:border-neutral-900' id='experience'>
            <TitleComponents
                title={t('experience_translate', { returnObjects: true }).map((item) =>
                    t(item.title)
                )}
            />

            <div>
                {t('experience_translate', { returnObjects: true }).map((item, idx) => (
                    <div className='flex flex-wrap mb-8 lg:justify-center' key={idx}>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-[18px] text-neutral-700 dark:text-neutral-300'>
                                {t(item.year)}
                            </p>
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold text-neutral-700 dark:text-neutral-300'>
                                <p>
                                    {t(item.role)}{' '}
                                    <span className='text-base font-semibold text-teal-700 dark:text-teal-500'>
                                        {t(item.company)}
                                    </span>
                                </p>
                            </h6>
                            <p className='mb-4 text-sm font-light text-neutral-700 dark:text-neutral-400'>
                                {t(item.description)}
                            </p>

                            <div className='flex flex-wrap gap-2'>
                                {Array.isArray(item.technologies) &&
                                    item.technologies.map((a, idx) => (
                                        <p
                                            key={idx}
                                            className='px-2 py-1 text-sm font-medium rounded-md w-max bg-neutral-700 dark:bg-neutral-800 text-neutral-300 '
                                        >
                                            {a}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent
