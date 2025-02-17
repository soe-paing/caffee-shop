import './review.css';
import { motion } from 'framer-motion';

import profi1 from '../../assets/review1.jpg';
import profi2 from '../../assets/review2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const ReviewCard = ({name, img, children}) => (
    <motion.div 
        className='review-card'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
    >
        <span>
            <i className='fas fa-quote-right'></i>
        </span>
        <div></div>
        <div className='review-content'>
            {children}
        </div>
        <div className='review-footer'>
            <div className="review-star">
                {
                    ['fas','fas','fas','fas','far'].map((cls, index) => {
                        return <i key={index} className={cls + " fa-star"}></i>
                    })
                }
                <h3>{name}</h3>
            </div>
            <figure className='profile'>
                <img src={img} alt="profile" />
            </figure>
        </div>
    </motion.div>
)

const Review = () => {
    return (
        <motion.section 
            id="review"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className='review-background-overlay'></div>
            <div className='container'>
                <motion.h1 
                    className='heading-black'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    Stories and Testimonials<br/>
                    From Our Clients
                </motion.h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 8000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Keep autoplay active even when users interact
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Mobile view
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2, // Tablet view
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3, // Desktop view
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper review-body"
                >
                    <SwiperSlide>
                        <ReviewCard img={profi1} name="Milla Davis">
                            <p>&quot; Java Time Cafe has a best coffee and a cozy atomosphere. I invested in their new opportunities-excited for the feature!&quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard img={profi1} name="Milla Davis">
                            <p>&quot;  The HappyAddon is an awesome plugin for WordPress. It have everything you need to create your stunning website. And the support is too quick&quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard img={profi2} name="Simpson Gardiola">
                            <p>&quot; Here I focus on a range of items and features that we use in elementor for our client web project without giving them a second thought &quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard img={profi2} name="Simpson Gardiola">
                            <p>&quot; Here I focus on a range of items and features that we use in elementor for our client web project without giving them a second thought &quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard img={profi2} name="Simpson Gardiola">
                            <p>&quot; Here I focus on a range of items and features that we use in elementor for our client web project without giving them a second thought &quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard img={profi2} name="Simpson Gardiola">
                            <p>&quot; Here I focus on a range of items and features that we use in elementor for our client web project without giving them a second thought &quot;</p>
                        </ReviewCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </motion.section>
    )
}

export default Review;