import { useState } from 'react';
import { MENU_DATAS } from '../../data';
import Btn1 from '../buttons/Btn1';
import './menu.css'
const Menu = () => {

    const [activeMenu, setActiveMenu] = useState(0);

    return (
        <section id="Menu">
            <div className="container">
                <h5 className="section-head">
                    <span>JAVATIMECAFEE</span><br/>
                    <h1 className='heading'>Table Menu</h1>
                </h5>
                <div className="menu-container">
                    <ul className="menu-header">
                        {MENU_DATAS.map((menu, index) => (
                            <li 
                                key={index} 
                                onClick={() => setActiveMenu(index)}
                                className={activeMenu == index ? 'active' : null}
                            >{menu.head}</li>
                        ))}
                    </ul>
                    <div className='menu'>
                        {
                            MENU_DATAS[activeMenu].menu.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item.img} />
                                    <div>
                                        <p>{item.name}</p>
                                        <div></div>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Btn1 rounded={true} size="large">Buy</Btn1>
                </div>
            </div>
        </section>
    )
}

export default Menu;