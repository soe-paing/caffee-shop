import './about.css';
import SvgSlider from '../svgSlider/SvgSlider';
import { ABOUT_iMGS } from '../../data';

const About = () => {

    return (
        <section className='about' id='About'>
            <div className='container'>
                <div className="contant">
                    <h1 className='heading'>Elvating Coffee with 35+<br/>
                    Years Expertise
                    </h1>
                    <p>Java Time Caffee leads with over 35 years of expertise in coffee, setting the standard for excellence. Our advanced POS systems and toptier machinary ensure an expectional coffee experience. With focus on sharing knowlage and dedication to quality, we're more than just a coffee shop - we're innovators in ihe industry.</p>
                    <p className='underline-btn'>Explore More</p>
                </div>
                <div className='image-slide-container'>
                    <SvgSlider src={ABOUT_iMGS}/>
                </div>
            </div>
        </section>
    )
}

export default About;