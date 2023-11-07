
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../contants';

const Findus = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
        <div className='app__wrapper_info'>
            <SubHeading title="Contact" />
            <h1 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find Us</h1>
            <div className='app__wrapper-content'>
                <p className='p__opensans'>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                <p className='p__cormorant' style={{ color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
                <p className='p__opensans'>Mon - Fri : 10:00 am - 08:00 pm</p>
                <p className='p__opensans'>Sat - Sun : 12:00 am - 09:00 pm</p>
            </div>
            <button className='custom__button' style={{ marginTop: '2rem'}}>Visit Us</button>
        </div>
        <div className='app__wrapper_img'>
            <img src={images.findus} alt='' />
        </div>
    </div>
  )
}

export default Findus