import cv_en from '../assets/cv/cv_en.pdf'
import cv_vi from '../assets/cv/cv_vi.pdf'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <>
            {/* Modal */}
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'>
                <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-lg'>
                    <div className='flex justify-center my-8'>
                        <a
                            onClick={onClose}
                            target='_blank'
                            href={cv_en}
                            className='px-4 py-2 mr-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400'
                        >
                            CV English
                        </a>
                        <a
                            onClick={onClose}
                            target='_blank'
                            href={cv_vi}
                            className='px-4 py-2 text-white rounded-lg bg-emerald-600 hover:bg-emerald-400 dark:bg-emerald-700'
                        >
                            CV Vietnamese
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
