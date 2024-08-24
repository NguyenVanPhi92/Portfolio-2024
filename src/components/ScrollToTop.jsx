// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const ScrollToTop = () => {
//     // Extracts pathname property(key) from an object
//     const { pathname } = useLocation()

//     // Automatically scrolls to top whenever pathname changes
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [pathname])
// }

// export default ScrollToTop
import { BiArrowToTop } from 'react-icons/bi'

const ScrollToTop = () => {
    return (
        <button className='bg-teal-600 text-white fixed right-4 bottom-4 opacity-90 p-2 m-4 float-right rounded-md'>
            <BiArrowToTop />
        </button>
    )
}

export default ScrollToTop
