import './cards.css';

export const Card1 = ({children, img, link='#', sub="Bar System"}) => (
    <div className='card1'>
        <a href={link}>
            <img src={img} alt="system" />
            <span>{sub}</span>
            <h4>{children}</h4>
        </a>
    </div>
)