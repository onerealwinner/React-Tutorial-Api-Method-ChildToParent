function ImageShow({imageSrc}) {
    return (
        <div>
            <img src={imageSrc.urls.small} alt={imageSrc.alt_description} title={imageSrc.alt_description + ' - Liked ' + imageSrc.likes + ' times'} />
        </div>
    )
}

export default ImageShow;