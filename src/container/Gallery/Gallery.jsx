import React from 'react';
import './Gallery.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../contants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
const Gallery = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if(direction === 'left'){
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }

    const galleryImages = [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04
    ]

  return (
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <SubHeading title="Instagram" />
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem'}}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</p>
            <button className='custom__button' type='button'>View more</button>
        </div>

        <div className='app__gallery-images'>
            <div className='app__gallery-images_container' ref={scrollRef}>
                {galleryImages.map((image, index) =>(
                    <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                        <img src={image} alt='' />
                        <BsInstagram className='gallery__image-icon' />
                    </div>
                ))}
            </div>
            <div className='app__gallery-images_arrows'>
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}  />
                <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}  />
            </div>
        </div>
    </div>
  )
}

export default Gallery