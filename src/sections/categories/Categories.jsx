import { CategoryCard } from '../../components/cards/Cards';
import { PRODUCTS } from '../../data';
import './categories.css';


const Categories = () => {

    return (
        <section id="Products">
            <div className="container">
                <h1 className='heading-black'>Our Top Featured<br/>
                Categories</h1>
                <div className='product-container'>
                    {PRODUCTS.map(
                        (cat, index) => <CategoryCard
                                    key={index}
                                    img={cat.img}
                                    title={cat.title}
                                    description={cat.description}/>
                    )}
                    <CategoryCard
                            img={PRODUCTS.img}
                            title={PRODUCTS.name}
                            description={PRODUCTS.description}/>
                </div>
            </div>
        </section>
    )
}

export default Categories;