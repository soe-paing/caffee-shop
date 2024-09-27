import { useState } from 'react';
import './paperMenu.css';
import Btn1 from '../buttons/Btn1';
import { MENU_DATAS } from '../../data';

const PaperMenu = () => {
    const [activeMenu, setActiveMenu] = useState(0);

    return (
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
    )
}

export default PaperMenu;