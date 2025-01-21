import clsx from 'clsx'
import { useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'

// type Props = {
//     onClose: (value: SetStateAction<boolean>) => void
//     open: Boolean
//     children: React.ReactNode
// }

const Modal = ({ open, onClose, children }) => {
  // handle block scroll user
  useEffect(() => {
    const handleScroll = (event) => event.preventDefault()
    if (open) {
      window.addEventListener('wheel', handleScroll, { passive: false })
      window.addEventListener('touchmove', handleScroll, { passive: false })
    } else {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [open])

  return (
    <>
      <div
        onClick={onClose}
        className={clsx(
          'fixed inset-0 flex justify-center items-center transition-colors ',
          open && 'visible bg-black/20',
          !open && 'invisible'
        )}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            'bg-white rounded-xl shadow py-4 px-10 transition-all ',
            open && 'scale-100 opacity-100',
            !open && 'scale-125 opacity-0'
          )}
        >
          <button
            onClick={onClose}
            className='absolute p-2 text-gray-400 bg-white rounded-lg top-2 right-2 hover:bg-gray-50 hover:text-gray-600'
          >
            <MdOutlineClose />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
