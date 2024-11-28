import './cards.css';
import React, { useState } from 'react';
import Btn1 from '../buttons/Btn1';
import propTypes from 'prop-types';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export const SeeMoreText = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p>
        {isExpanded ? text : `${text.substring(0, limit)}...`}
        {text.length > limit && (
            <span 
                onClick={toggleExpand} 
                style={{ color: '#fff', cursor: 'pointer', textTransform: 'capitalize' }}
            >
            {isExpanded ? ' Show less' : 'more'}
            </span>
        )}
    </p>
  );
};

export const Card1 = ({children, img, link='#', sub="Bar System", width="49"}) => (
    <div className='card1' style={{width: `${width}%`}}>
        <div style={{backgroundImage: `url(${img})`}}>
            <div>
                <span>{sub}</span>
                <Btn1 rounded={true}>{children}</Btn1>
            </div>
        </div>
    </div>
)

Card1.propTypes = {
    children: propTypes.string.isRequired,
    img: propTypes.string,
    link: propTypes.string,
    sub: propTypes.string,
    width: propTypes.string,
}

export const Card2 = ({img, name, price, description, width="100"}) => (
    <div className='card2' style={{width: `${width}%`}}>
        <div>
            <div className='img'>
                <img src={img} alt="img" />
            </div>
            <span className='price'>{price}</span>
            <div className='content'>
                <h2>{name}</h2>
                <Btn1 size='small' rounded={true}>Add To Cart</Btn1>
            </div>
            <SeeMoreText text={description} limit={78} />
        </div>
    </div>
)

export const CategoryCard = ({img, title, description}) => {
    return (
        <div className='category-card'>
            <div style={{backgroundImage: `url(${img})`}}></div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p className='underline-btn'>
                View Products
            </p>
        </div>
    )
}

