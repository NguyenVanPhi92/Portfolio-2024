import Photo1 from '../assets/pic/photo1.jpeg'
import Photo2 from '../assets/pic/photo2.jpeg'
import Photo3 from '../assets/pic/photo3.jpeg'
import Photo4 from '../assets/pic/image1.png'
import Photo5 from '../assets/pic/image.png'
import Photo6 from '../assets/pic/party.png'

const CardsData = [
    {
        id: 1,
        img: Photo4,
        title: 'Sunset',
        desc: 'Each character will appear one by one'
    },
    {
        id: 2,
        img: Photo5,
        title: 'Dog',
        desc: 'Each character will appear one by one'
    },
    {
        id: 3,
        img: Photo6,
        title: 'Sunrise',
        desc: 'Each character will appear one by one'
    },
    {
        id: 4,
        img: Photo4,
        title: 'Sunset',
        desc: 'Each character will appear one by one'
    },
    {
        id: 5,
        img: Photo5,
        title: 'Dog',
        desc: 'Each character will appear one by one'
    },
    {
        id: 6,
        img: Photo6,
        title: 'Sunrise',
        desc: 'Each character will appear one by one'
    }
]
const AnimatedCard = () => {
    return (
        <div className='container mx-auto'>
            {/* cards section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 w-full'>
                {CardsData.map(({ id, img, title, desc }) => {
                    return (
                        <div
                            key={id}
                            className='text-white rounded-lg overflow-hidden relative group'
                        >
                            <img
                                src={img}
                                alt=''
                                className='object-cover w-full h-[250px] rounded-lg'
                            />
                            {/* overlay section */}
                            <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500'>
                                <div className='space-y-4'>
                                    <button className='border border-white px-4 py-2 mt-9 rounded-lg hover:bg-black/20 duration-300'>
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AnimatedCard
