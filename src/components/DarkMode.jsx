import { useContext } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { MyContext } from '../contexts/app.context'
const DarkModeComponent = () => {
    const { darkMode: theme, dispatch } = useContext(MyContext)

    const handleThemeSwitch = () => {
        if (theme === 'dark') {
            dispatch({ type: 'DARK_MODE', payload: 'light' })
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        } else {
            dispatch({ type: 'DARK_MODE', payload: 'dark' })
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        }
    }

    return (
        <button
            className='float-right p-2 m-4 duration-300 border border-gray-700 rounded-md opacity-90 hover:opacity-65'
            onClick={handleThemeSwitch}
        >
            {theme === 'light' ? <MdSunny /> : <FaMoon />}
        </button>
    )
}

export default DarkModeComponent
