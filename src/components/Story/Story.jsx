import { Card1 } from '../cards/Cards';
import './story.css';
import storyImg from '../../assets/story1.png';
import storyImg1 from '../../assets/story2.png';

const Story = () => {


    return (
        <section className='story container'>
            <h1 className='heading'>Unveiling the Story of<br/>Java Time Coffee</h1>
            <div className='story-paragraph'>
                <p>Welcom to Java Time Caffee, your ultimate destination for premium coffee, tea, chocolate, and bakery delights worldwide. We're dedicated to delivering top-notch products and a seamless online shopping experience. Plus, we're expanding with 300 new coffee shops by 2029 to bring our passion to more communities. Join us to explore and savor the best tea, coffee, chocolate, and bakery treats!</p>
            </div>
            <div className='card-container'>
                <Card1 img={storyImg} sub='BUY OUR PRODUCTS'>
                    See our Products
                </Card1>
                <Card1 img={storyImg1} sub='FOR INVESTERS'>
                    Invest Now
                </Card1>
            </div>
        </section>
    )
}

export default Story;