import { Card1 } from '../cards/Cards';
import './system.css';
import { SYSTEM_DATA } from '../../data';

const System = () => {


    return (
        <section className='system container'>
            {
                SYSTEM_DATA.map((i,index) => <Card1 key={index} img={i.image}>{i.content}</Card1>)
            }
        </section>
    )
}

export default System;