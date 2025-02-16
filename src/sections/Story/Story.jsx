import { motion } from 'framer-motion';
import { Card1 } from '../../components/cards/Cards';
import './story.css';
import storyImg from '../../assets/story1.png';
import storyImg1 from '../../assets/story2.png';

const Story = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <motion.section 
            className='story container'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1 
                className='heading-black'
                variants={fadeInUp}
            >
                Unveiling the Story of<br/>Java Time Coffee
            </motion.h1>
            <motion.div 
                className='story-paragraph'
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
            >
                <p>Welcom to Java Time Caffee, your ultimate destination for premium coffee, tea, chocolate, and bakery delights worldwide. We're dedicated to delivering top-notch products and a seamless online shopping experience. Plus, we're expanding with 300 new coffee shops by 2029 to bring our passion to more communities. Join us to explore and savor the best tea, coffee, chocolate, and bakery treats!</p>
            </motion.div>
            <motion.div 
                className='card-container'
                variants={{
                    initial: { opacity: 0 },
                    animate: { 
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.div variants={fadeInUp}>
                    <Card1 img={storyImg} sub='BUY OUR PRODUCTS'>
                        See our Products
                    </Card1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <Card1 img={storyImg1} sub='FOR INVESTERS'>
                        Invest Now
                    </Card1>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Story;