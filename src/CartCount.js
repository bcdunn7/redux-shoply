import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const CartCount = () => {

    const cart = useSelector(store => store.cart)

    let totalItems = 0;

    for (const item of cart) {
        totalItems += item.count;
    }

    return (
        <div>
            <p>
                <span className="Cart-number">{totalItems}</span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </p>
        </div>
    )
}

export default CartCount;