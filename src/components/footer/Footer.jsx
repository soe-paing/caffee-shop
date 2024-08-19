import './footer.css';
import footBG from '../../assets/contactBg.png';

const Footer = () => {
    return <section className='footer'>
        <div className="footer-bg" style={{backgroundImage: `url(${footBG})`}}>
            <div className='footer-content'>
                <h1>Subscribe to our newsletter for the<br/>
                latest update and offers.
                </h1>
                <form className='subscribe-input' action="#">
                    <input placeholder='Enter Your Email' type="text" />
                    <button>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
}

export default Footer;