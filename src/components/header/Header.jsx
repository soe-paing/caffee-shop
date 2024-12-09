import './header.css'
import { NAV_DATA} from '../../data';
import { CloseRight } from '../buttons/Btn1';
import { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.jpg';
import CartModal from '../cartModal/cartModal';
import { CartContext } from '../../store/shop-cart-context';
import { Outlet } from 'react-router-dom';

const Header = () => {
    const { items } = useContext(CartContext);
    const [ isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);
    const modal = useRef();

    function handleOpenCartClick() {
      modal.current.open();
      isActive == 'active-cart' ?
      setIsActive(false) : setIsActive('active-cart');
    }

    const cartQuantity = items.length;
    
    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    useEffect(() => {
        const header = headerRef.current;
        if (header) {
        const height = header.offsetHeight;
        header.style.setProperty('--header-border-radius-value', `calc(0.5 * ${height}px)`);
        }
    }, []);
    
    return (
        <>
            <CartModal
            ref={modal}
            title="Your Cart"
            actions={modalActions}
            />
            <header
                ref={headerRef}
                onScroll={() => setIsActive(false)}>
                <div className="header">
                    <a href="#" className="logo">
                        <img src={logo} alt="javatime logo" />
                    </a>
                    <nav className={`${isActive} navbar`}>
                        <CloseRight setFalse={() => setIsActive(false)}/>
                        { NAV_DATA.map( (nav, index) => <a key={index} href={`#${nav}`}>{nav}</a>) }
                    </nav>
                    <div className='icons'>
                        <div 
                            className="fas fa-bag-shopping" 
                            id='cart-btn'
                            onClick={handleOpenCartClick}
                        >
                            {cartQuantity > 0 && <span className='bage'>{cartQuantity}</span>}
                        </div>
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
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export default Header;
