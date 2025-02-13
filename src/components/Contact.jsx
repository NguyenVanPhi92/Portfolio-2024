import { CONTACT } from '../constants'
import TitleComponents from './Title'
import { FaRegAddressBook } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { IoMdPhonePortrait } from 'react-icons/io'

const ContactComponent = () => {
  return (
    <div className='text-[12px] md:text-[16px]' id='8'>
      <TitleComponents title='Get in touch' />
      <div className='flex items-center justify-center gap-6 mb-8 tracking-tighter dark:text-neutral-400 text-neutral-700'>
        <div className='flex items-center gap-2'>
          <FaRegAddressBook />
          <p>{CONTACT.address}</p>
        </div>
        <div className='flex items-center gap-2'>
          <MdOutlineEmail />
          <p>{CONTACT.email}</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoMdPhonePortrait />
          <p>{CONTACT.phoneNo}</p>
        </div>
      </div>

      {/* <div className='p-4 mx-auto max-w-xl mt-6 font-[sans-serif]'>
                <h1 className='text-3xl font-extrabold text-center text-neutral-400'>Contact us</h1>
                <form className='mt-8 space-y-4'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='w-full px-4 py-3 text-sm rounded-md text-neutral-400 focus:outline-none bg-slate-300 bg-opacity-95'
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full px-4 py-3 text-sm rounded-md text-neutral-400 focus:outline-none bg-slate-300 bg-opacity-95'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='w-full px-4 py-3 text-sm rounded-md text-neutral-400 focus:outline-none bg-slate-300 bg-opacity-95'
                    />
                    <textarea
                        placeholder='Message'
                        rows='6'
                        className='w-full px-4 pt-3 text-sm rounded-md text-neutral-400 focus:outline-none bg-slate-300 bg-opacity-95'
                    ></textarea>
                    <button
                        type='button'
                        className='w-full px-4 py-3 text-sm tracking-wide text-white rounded-md bg-emerald-900 hover:bg-emerald-800'
                    >
                        Send
                    </button>
                </form>
            </div> */}
    </div>
  )
}

export default ContactComponent
