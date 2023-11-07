import React from 'react';
import './Header.css';
import images from '../../contants/images';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
            <SubHeading  title='Chase the new flavour'/>
            <h1 className='app__header-h1'>The Key to Fine Dining</h1>
            <p className='p__opensans' style={{ margin: '2rem 0'}}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className='app__wrapper_img'>
            <img src={images.welcome} alt='' style={{ borderRadius: '30% 0 30% 0' }} />
        </div>
    </div>
  )
}

export default Header