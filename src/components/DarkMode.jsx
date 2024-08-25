import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
const DarkModeComponent = (props) => {
    const { darkMode } = props
    console.log(darkMode)

    return (
        <button
            className='border border-gray-700 opacity-90 p-2 m-4 float-right rounded-md hover:opacity-65 duration-300'
            onClick={darkMode}
        >
            {props.theme === 'light' ? <MdSunny /> : <FaMoon />}
        </button>
    )
}

export default DarkModeComponent
