import { Card2 } from '../cards/Cards';
import './products.css';
import { PRODUCTS } from '../../data';

const Line = () => <div className='line'></div>

const Products = () => {
    return (
        <section id='Products'>
            <div className="container">
                <ul className='product-list'>
                    {
                        PRODUCTS.map((prod, index) => (
                            <li key={index}>
                                <Card2 name={prod.title} price={prod.price} img={prod.image} description={prod.description}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Products;