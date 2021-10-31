import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector(store => store.cart)

    let totalItems = 0;

    for (const item of cart) {
        totalItems += item.count;
    }

    return (
        <div>
            <p>Total Items: {totalItems}</p>
        </div>
    )
}

export default Cart;