const TitleComponents = (props) => {
    return (
        <h1 className='my-20 text-center text-4xl'>
            {props.title}
            <span className='text-neutral-500'> {props.subTitle}</span>
        </h1>
    )
}

export default TitleComponents
