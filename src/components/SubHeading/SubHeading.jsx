import React from 'react'
import images from '../../contants/images';


const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>{title}</p>
        <img src={images.spoon} 
        alt='' 
        className='spoon__image'
        style={{ filter: 'invert(100%)'}} />
    </div>
  )
}

export default SubHeading;