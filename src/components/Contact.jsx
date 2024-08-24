import { CONTACT } from '../constants'
import TitleComponents from './Title'
import { FaRegAddressBook } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { IoMdPhonePortrait } from 'react-icons/io'

const ContactComponent = () => {
    return (
        <div className='border-b border-neutral-900'>
            <TitleComponents title='Get in touch' />

            <div className='text-neutral-400 tracking-tighter flex justify-center items-center gap-6'>
                <div className='my-4 flex items-center gap-2'>
                    <FaRegAddressBook />
                    <p>{CONTACT.address}</p>
                </div>

                <div className='my-4 flex items-center gap-2'>
                    <MdOutlineEmail />
                    <p>{CONTACT.email}</p>
                </div>

                <div className='my-4 flex items-center gap-2'>
                    <IoMdPhonePortrait />
                    <p>{CONTACT.phoneNo}</p>
                </div>
            </div>

            {/* <div className='p-4 mx-auto max-w-xl mt-6 font-[sans-serif]'>
                <h1 className='text-3xl text-neutral-400 font-extrabold text-center'>Contact us</h1>
                <form className='mt-8 space-y-4'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='w-full rounded-md py-3 px-4 text-neutral-400 focus:outline-none text-sm bg-slate-300 bg-opacity-95'
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full rounded-md py-3 px-4 text-neutral-400 focus:outline-none text-sm bg-slate-300 bg-opacity-95'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='w-full rounded-md py-3 px-4 text-neutral-400 focus:outline-none text-sm bg-slate-300 bg-opacity-95'
                    />
                    <textarea
                        placeholder='Message'
                        rows='6'
                        className='w-full rounded-md px-4 text-neutral-400 focus:outline-none text-sm pt-3 bg-slate-300 bg-opacity-95'
                    ></textarea>
                    <button
                        type='button'
                        className='text-white bg-emerald-900 hover:bg-emerald-800 tracking-wide rounded-md text-sm px-4 py-3 w-full'
                    >
                        Send
                    </button>
                </form>
            </div> */}
        </div>
    )
}

export default ContactComponent
