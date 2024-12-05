import { Card2 } from '../cards/Cards';
import './products.css';
import { PRODUCTS } from '../../data';
import { useContext } from 'react';
import { CartContext } from '../../store/shop-cart-context';

const Line = () => <div className='line'></div>

const Products = () => {
    const { addItemToCart } = useContext(CartContext);
    return (
        <section id='Products'>
            <div className="container">
                <ul className='product-list'>
                    {
                        PRODUCTS.map((prod) => (
                            <li key={prod.id}>
                                <Card2 
                                    id={prod.id}
                                    name={prod.title} 
                                    price={prod.price} 
                                    img={prod.image} 
                                    description={prod.description}
                                    addItem={addItemToCart}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Products;