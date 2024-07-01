import './cards.css';
import propTypes from 'prop-types';

export const Card1 = ({children, img, link='#', sub="Caffee Shop"}) => (
    <div className='card1'>
        <a href={link}>
            <img src={img} alt="system" />
            <span>{sub}</span>
            <h4>{children}</h4>
        </a>
    </div>
)

Card1.propTypes = {
    children: propTypes.string.isRequired,
    img: propTypes.string,
    link: propTypes.string,
    sub: propTypes.string
}

export const Card2 = () => (
    <div></div>
)