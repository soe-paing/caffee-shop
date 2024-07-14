import { Card2 } from '../cards/Cards';
import './products.css';
import { PRODUCTS } from '../../data';
import Btn1 from '../buttons/Btn1';

const Line = () => <div className='line'></div>

const Products = () => {
    return (
        <section id='Products'>
            <div className="container">
                <h5 className="section-head">
                    <span>Latest</span><br/>
                    Products
                </h5>
                <div className='card-container'>
                {
                    PRODUCTS.map((prod, index) => <Card2 key={index} name={prod.name} price={prod.price} img={prod.img} description={prod.description}/>)
                }
                </div>
            </div>
            <div className='container more-products'>
                <Line/>
                <Btn1 rounded={true}>More Products</Btn1>
                <Line/>
            </div>
        </section>
    )
}

export default Products;