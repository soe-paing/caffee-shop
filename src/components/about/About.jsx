import './about.css';
import SvgSlider from '../svgSlider/SvgSlider';
import { ABOUT_iMGS } from '../../data';

const About = () => {

    return (
        <section className='about' id='About'>
            <div className='container'>
                <div className="contant">
                    <h5>
                        <span>About Us</span>
                        <br/>
                        We create
                        <br/>
                        branded coffee
                    </h5>
                    <div className='divider'> </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, porro nesciunt at consequatur vitae accusantium repellendus blanditiis, quidem dolorum officiis modi et laudantium nemo ipsa omnis aspernatur repudiandae ut eius iure maiores maxime fugit inventore voluptatum. Cum beatae, delectus distinctio officia mollitia fugit molestias ipsam libero maxime impedit. Dolor reiciendis consectetur odio doloremque possimus.</p>
                </div>
                <div className='image-slide-container'>
                    <SvgSlider src={ABOUT_iMGS}/>
                </div>
            </div>
        </section>
    )
}

export default About;