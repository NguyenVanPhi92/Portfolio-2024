import { BiArrowToTop } from 'react-icons/bi'
import { Link } from 'react-scroll'

const ScrollToTop = () => {
    return (
        <Link
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            //   onSetActive={handleSetActive}
            to='home'
            className='fixed float-right p-2 m-4 text-white bg-teal-600 rounded-md cursor-pointer right-4 bottom-4 opacity-90'
            aria-current='pag'
        >
            <BiArrowToTop />
        </Link>
    )
}

export default ScrollToTop
