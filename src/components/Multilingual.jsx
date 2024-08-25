import React, { useState } from 'react'
import { GrLanguage } from 'react-icons/gr'

const MultilingualComponent = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='relative'>
            <GrLanguage
                className='cursor-pointer group hover:opacity-75 duration-300'
                onClick={() => setToggle((_) => !_)}
            />
            {toggle && (
                <ul className='absolute border shadow-md text-sm right-0 top-6 bg-white rounded-md dark:bg-[#272638] dark:border-slate-900'>
                    <li
                        className='hover:bg-slate-50 p-2 dark:hover:bg-[#212030] duration-300'
                        onClick={() => setToggle((_) => !_)}
                    >
                        <a href='vni'>Vietnamese</a>
                    </li>
                    <li
                        className='hover:bg-slate-50 p-2 dark:hover:bg-[#212030] duration-300'
                        onClick={() => setToggle((_) => !_)}
                    >
                        <a href='eng'>English</a>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default MultilingualComponent
