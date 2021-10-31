import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './actions';
import './ProductCard.css'

const ProductCard = ({ id, name, price, description, image_url}) => {

    const count = useSelector(store => store.cart.find(item => item.id === id).count)
    const dispatch = useDispatch();

    const add = (id) => dispatch(addItem(id));
    const remove = (id) => {
        if (count > 0) {
            dispatch(removeItem(id))
        }
    };

    return (
        <div className="ProductCard" id={id}>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
            <img className="ProductCard-img" src={image_url} alt={name}/>
            <div>
                <button 
                    className="ProductCard-add-btn"
                    onClick={() => add(id)}
                >
                        Add to Cart
                </button>
                <span>Currently in cart: {count}</span>
                <button 
                    className="ProductCard-remove-btn"
                    onClick={() => remove(id)}    
                >
                    Remove from Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard;