import React from 'react';
import './Chef.css';
import { images } from '../../contants';
import SubHeading from '../../components/SubHeading/SubHeading';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className='app__wrapper_img app__wrapper_img-reverse'>
            <img src={images.chef} alt=''  />
        </div>

        <div className='app__wrapper_info'>
            <SubHeading title="Chef's Word" />
            <h1 className='headtext__cormorant'>What We Believe In</h1>

            <div className='app__chef-content'>
                <div className='app__chef-content_quote'>
                    <img src={images.quote} alt='' />
                    <p className='p__opensans'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</p>
                </div>
                <p className='p__opensans'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</p>
            </div>

            <div className='app__chef-sign'>
                <p>Pavlo Johns</p>
                <p className='p__opensans'>Chef & Designer</p>
                <img src={images.sign} alt=''  />
            </div>

        </div>


    </div>
  )
}

export default Chef;