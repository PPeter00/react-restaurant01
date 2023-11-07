import React from 'react';
import './AboutUs.css';
import images from '../../contants/images';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        <div className='app__aboutus-overlay flex__center'>
            <img src={images.G} alt=''  />
        </div>
        <div className='app__aboutus-content flex__center'>

            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={images.spoon} alt='' className='spoon__image' />
                <p className='p__opensans'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</p>
                <button type='button' className='custom__button'>Read More</button>
            </div>

            <div className='app__aboutus-content_knife flex__center'>
                <img src={images.knife} alt=''  className=''/>
            </div>


            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={images.spoon} alt='' className='spoon__image' />
                <p className='p__opensans'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</p>
                <button type='button' className='custom__button'>Read More</button>
            </div>

        </div>
    </div>
  )
}

export default AboutUs