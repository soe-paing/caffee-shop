import './investmentSection.css';
import InvestorsCount from "../../components/investorsCount/InvestorsCount";
import invesCoffee from '../../assets/coffeebeans.jpeg'

const InvestmentSection = () => {
    return (
        <section className='investment-section'>
            <div className="container">
                <div className='coffee-img'>
                    <img src={invesCoffee} alt="" />
                </div>
                <div className="content">
                    <h1 className='heading-black'>Secure your future with<br/>
                    Java Times Caffee's investment<br/>
                    Opportunity now.
                    </h1>
                    <p>Invest in Java Times Caffee for financial growth and a coffee revolutiron. With 25+ years of expertise, we've grown from a Mexical supplier to a global marketplace. Join us to shape the future of specialt coffee. We prioritize quality and innovation in every aspect, from production to customer service.</p>
                    <p className='underline-btn'>Explore More</p>
                </div>
            </div>
            <InvestorsCount />
        </section>
    )
}

export default InvestmentSection;