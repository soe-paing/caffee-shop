import { motion } from 'framer-motion';
import './investmentSection.css';
import InvestorsCount from "../../components/investorsCount/InvestorsCount";
import invesCoffee from '../../assets/coffeebeans.jpeg'

const InvestmentSection = () => {
    const fadeInScale = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
    };

    return (
        <motion.section 
            className='investment-section' 
            id='investment'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="container">
                <motion.div 
                    className='coffee-img'
                    variants={fadeInScale}
                >
                    <img src={invesCoffee} alt="" />
                </motion.div>
                <motion.div 
                    className="content"
                    variants={{
                        initial: { opacity: 0, x: 100 },
                        animate: { opacity: 1, x: 0 }
                    }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className='heading-black'>Secure your future with<br/>Java Times Caffee's investment<br/>Opportunity now.</h1>
                    <p>Invest in Java Times Caffee for financial growth and a coffee revolutiron. With 25+ years of expertise, we've grown from a Mexical supplier to a global marketplace. Join us to shape the future of specialt coffee. We prioritize quality and innovation in every aspect, from production to customer service.</p>
                    <p className='underline-btn'>Explore More</p>
                </motion.div>
            </div>
            <motion.div
                variants={fadeInScale}
                transition={{ delay: 0.5 }}
            >
                <InvestorsCount />
            </motion.div>
        </motion.section>
    )
}

export default InvestmentSection;