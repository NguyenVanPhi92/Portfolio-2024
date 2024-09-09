const TitleComponents = (props) => {
    return (
        <h1 className='my-20 text-4xl text-center text-neutral-700 dark:text-neutral-300'>
            {props.title}
            <span className='text-teal-500'> {props.subTitle}</span>
        </h1>
    )
}

export default TitleComponents
