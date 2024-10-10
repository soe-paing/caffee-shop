import { CategoryCard } from '../../components/cards/Cards';
import { CATEGORIES } from '../../data';
import './categories.css';


const Categories = () => {

    return (
        <section id="Products">
            <div className="container">
                <h1 className='heading-black'>Our Top Featured<br/>
                Categories</h1>
                <div className='product-container'>
                    {CATEGORIES.map(
                        (category, index) => <CategoryCard
                                    key={index}
                                    img={category.img}
                                    title={category.title}
                                    description={category.description}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Categories;