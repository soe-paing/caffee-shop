import { motion } from 'framer-motion';
import { CategoryCard } from '../../components/cards/Cards';
import { CATEGORIES } from '../../data';
import './categories.css';

const Categories = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3,
                duration: 1.2
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <motion.section 
            id="categories"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
        >
            <div className="container">
                <motion.h1 
                    className='heading-black'
                    variants={itemVariants}
                >
                    Our Top Featured<br/>Categories
                </motion.h1>
                <motion.div 
                    className='categorie-container'
                    variants={containerVariants}
                >
                    {CATEGORIES.map((category, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CategoryCard
                                img={category.img}
                                title={category.title}
                                description={category.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Categories;