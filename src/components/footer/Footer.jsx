import './footer.css';
import footBG from '../../assets/footer.jpg';

const Footer = () => {
    return <section className='footer'>
        <div className="effet">
            <div className="footer-bg" style={{backgroundImage: `url(${footBG})`}}>
                <div className="filtre filtre--l"></div>
            </div>
        </div>
        <svg>
            <defs>
                <mask id="mask-linear">
                    <rect width="100vw" height="100%" fill="url(#l1)"></rect>
                    <linearGradient id="l1" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="white" offset="5%"/>
                        <stop stopColor="black" offset="50%"/>
                        <stop stopColor="white" offset="100%"/>
                    </linearGradient>
                </mask>
                <filter id="filtre">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
                </filter>
            </defs>
        </svg>
    </section>
}

export default Footer;