import './footer.css';
import footBG from '../../assets/contactBg.png';
import locationPin from '../../assets/location-39.svg';
import clock from '../../assets/alarm-clock-2629.svg';

const Footer = () => {
    return <section className='footer'>
        <div className="footer-bg" style={{backgroundImage: `url(${footBG})`}}>
            <div className='footer-content container'>
                <h1 className='heading'>Subscribe to our newsletter for the<br/>
                latest update and offers.
                </h1>
                <form className='subscribe-input' action="#">
                    <input placeholder='Enter Your Email' type="text" />
                    <button>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </form>
                <div className='contact'>
                    <div className='open-time'>
                        <img src={clock} alt="clock-img" />
                        <p>Our Opening Time<br/><span>Everyday: 11.30am-7pm</span></p>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='social'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className='location'>
                        <img src={locationPin} alt="location-pin" />
                        <p>New York, 121 Street<br/><span>LLC Road, United States</span></p>
                    </div>
                </div>
                <div className='copy-right'>
                    <p>&copy; Copyright 2024, All Rights Reserved by Shayan Designs</p>
                </div>
            </div>
        </div>
    </section>
}

export default Footer;