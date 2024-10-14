import Photo5 from '../assets/pic/interest/image.png'
import Photo4 from '../assets/pic/interest/image1.png'
import Photo6 from '../assets/pic/interest/party.png'
import TitleComponents from './Title'

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

const InterestComponent = () => {
    return (
        <div className='text-center' id='interest'>
            <TitleComponents title='Interest' />

            {/* cards section */}
            <div className='container mx-auto'>
                <div className='grid justify-center w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                    {CardsData.map(({ id, img }) => {
                        return (
                            <div
                                key={id}
                                className='relative overflow-hidden text-white rounded-lg group'
                            >
                                <img
                                    src={img}
                                    alt=''
                                    className='object-cover w-full h-[250px] rounded-lg'
                                />
                                {/* overlay section */}
                                <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500'>
                                    <div className='space-y-4'>
                                        <button className='px-4 py-2 duration-300 border border-white rounded-lg mt-9 hover:bg-black/20'>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InterestComponent
