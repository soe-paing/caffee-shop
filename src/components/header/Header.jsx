import './header.css'
import Logo from '../../assets/logo.png';
import CartItem from '../cartItem/CartItem';
import { CART_ITEMS, NAV_DATA} from '../../data';
import Btn1, { CloseRight } from '../buttons/Btn1';
import { useState } from 'react'; 

const Header = () => {
    const [ isActive, setIsActive] = useState(false);
    
    return (
        <header
            className="header"
            onScroll={() => setIsActive(false)}>
            <a href="#" className="logo">
                <img src={Logo} alt="logo"/>
            </a>
            <nav className={`${isActive} navbar`}>
                <CloseRight setFalse={() => setIsActive(false)}/>
                { NAV_DATA.map( (nav, index) => <a key={index} href={nav}>{nav}</a>) }
            </nav>
            <div className='icons'>
                <div 
                    className="fas fa-search" 
                    id='search-btn'
                    onClick={() => {
                        isActive == 'active-search' ?
                        setIsActive(false) : setIsActive('active-search');
                    }}></div>
                <div 
                    className="fas fa-shopping-cart" 
                    id='cart-btn'
                    onClick={() => {
                        isActive == 'active-cart' ?
                        setIsActive(false) : setIsActive('active-cart');
                    }}></div>
                <div 
                    className="fas fa-bars" 
                    id='menu-btn'
                    onClick={() => {
                        isActive == 'active-nav' ?
                        setIsActive(false) : setIsActive('active-nav');
                    }}></div>
            </div>
            <div className={`${isActive} search-form`}>
                <input type="search" placeholder='search here' id="search-box" />
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div>
            <div className={`${isActive} cart-items-container`}>
                <CloseRight setFalse={() => setIsActive(false)}/>
                { CART_ITEMS.map( (item, index) => <CartItem key={index} {...item}/>) }
                <Btn1 rounded={true}>Checkout</Btn1>
            </div>
        </header>
    )
}

export default Header;
