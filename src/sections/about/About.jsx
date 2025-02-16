import { motion } from 'framer-motion';
import './about.css';
import { ABOUT_iMGS } from '../../data';
import SvgSlider from '../../components/svgSlider/SvgSlider';

const About = () => {
    const slideIn = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 }
    };

    return (
        <motion.section 
            className='about' 
            id='about'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className='container'>
                <motion.div 
                    className="content"
                    variants={slideIn}
                >
                    <h1 className='heading'>Elvating Coffee with 35+<br/>Years Expertise</h1>
                    <p>Java Time Caffee leads with over 35 years of expertise in coffee, setting the standard for excellence. Our advanced POS systems and toptier machinary ensure an expectional coffee experience. With focus on sharing knowlage and dedication to quality, we're more than just a coffee shop - we're innovators in ihe industry.</p>
                    <p className='underline-btn'>Explore More</p>
                </motion.div>
                <motion.div 
                    className='image-slide-container'
                    variants={{
                        initial: { opacity: 0, x: 100 },
                        animate: { opacity: 1, x: 0 }
                    }}
                    transition={{ delay: 0.3 }}
                >
                    <SvgSlider src={ABOUT_iMGS}/>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About;