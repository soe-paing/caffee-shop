import './cartItem.css';

const CartItem = ({image, name, price}) => (
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={image} alt="cart-image" />
        <div>
            <h3>{name}</h3>
            <div className="price">{price}</div>
        </div>
    </div>
)

export default CartItem;