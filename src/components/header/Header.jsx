import './header.css'
import CartItem from '../cartItem/CartItem';
import { CART_ITEMS, NAV_DATA} from '../../data';
import Btn1, { CloseRight } from '../buttons/Btn1';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.jpg';

const Header = () => {
    const [ isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        if (header) {
        const height = header.offsetHeight;
        header.style.setProperty('--header-border-radius-value', `calc(0.5 * ${height}px)`);
        }
    }, []);
    
    return (
        <header
            ref={headerRef}
            className="header"
            onScroll={() => setIsActive(false)}>
            <a href="#" className="logo">
                <img src={logo} alt="javatime logo" />
            </a>
            <nav className={`${isActive} navbar`}>
                <CloseRight setFalse={() => setIsActive(false)}/>
                { NAV_DATA.map( (nav, index) => <a key={index} href={nav}>{nav}</a>) }
            </nav>
            <div className='icons'>
                <div 
                    className="fas fa-bag-shopping" 
                    id='cart-btn'
                    onClick={() => {
                        isActive == 'active-cart' ?
                        setIsActive(false) : setIsActive('active-cart');
                    }}></div>
                <div 
                    className="fas fa-user" 
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
            <div className={`${isActive} cart-items-container`}>
                <CloseRight setFalse={() => setIsActive(false)}/>
                { CART_ITEMS.map( (item, index) => <CartItem key={index} {...item}/>) }
                <Btn1 rounded={true}>Checkout</Btn1>
            </div>
        </header>
    )
}

export default Header;
