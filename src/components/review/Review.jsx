import './review.css';
import profi1 from '../../assets/review1.jpg';
import profi2 from '../../assets/review2.jpg';

const ReviewCard = ({name, img, children}) => (
    <div>
        <figure className='profile'>
            <img src={img} alt="profile" />
        </figure>
        <div className='review-content'>
            <h3>{name}</h3>
            <div className="review-star">
                {
                    ['fas','fas','fas','fas','far'].map((cls, index) => {
                        return <i key={index} className={cls + " fa-star"}></i>
                    })
                }
            </div>
            {children}
        </div>
    </div>
)

const Review = () => {
    return (
        <section id="review">
            <div className='review-background-overlay'></div>
            <div className='review-shadow'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    <path className="elementor-shape-fill" style={{opacity: 0.5}} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path className="elementor-shape-fill" style={{opacity: 0.25}} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                </svg>
            </div>
            <div className='container'>
                <div className="review-header">
                    <h5 className="section-head">
                        <span>Caffee</span>
                    </h5>
                </div>
                <div className="review-body row">
                    <div>
                        <h5>
                            Reviews<br/>
                            <span>By Customers</span>
                        </h5>
                    </div>
                    <ReviewCard img={profi1} name="Milla Davis">
                        <p>&quot;  The HappyAddon is an awesome plugin for WordPress. It have everything you need to create your stunning website. And the support is too quick&quot;</p>
                    </ReviewCard>
                    <ReviewCard img={profi2} name="Simpson Gardiola">
                        <p>&quot; Here I focus on a range of items and features that we use in elementor for our client web project without giving them a second thought &quot;</p>
                    </ReviewCard>
                </div>
            </div>
        </section>
    )
}

export default Review;