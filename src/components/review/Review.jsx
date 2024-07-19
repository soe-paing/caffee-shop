import './review.css';
import profi from '../../assets/logo.png';

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
                    <div>
                        <figure className='profile'>
                            <img src={profi} alt="profile" />
                        </figure>
                        <div className='review-content'>
                            <h3>Milla Davis</h3>
                            <div className="review-star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>&quot;  The HappyAddon is an awesome plugin for WordPress. It have everything you need to create your stunning website. And the support is too quick&quot;</p>
                        </div>
                    </div>
                    <div>
                        <figure className='profile'>
                            <img src={profi} alt="profile" />
                        </figure>
                        <div className='review-content'>
                            <h3>Milla Davis</h3>
                            <div className="review-star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>&quot;The HappyAddon is an awesome plugin for WordPress. It have everything you need to create your stunning website. And the support is too quick&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;