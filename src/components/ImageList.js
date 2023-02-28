import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({images}) {

    const renderedImages = images.map((image, i) => {
        return <ImageShow imageSrc={image} key={image.id} />;
    });

    return (
        <div className='image-list'>
            {renderedImages}
        </div>
    )
}

export default ImageList;