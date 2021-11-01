import CartCount from "./CartCount";
import ProductList from "./ProductList";
import { useSelector } from 'react-redux';

const Home = () => {
    
    const products = useSelector(store => store.products);

	const productsArr = [];

	const productsToArr = () => {
		for (const key in products) {
			productsArr.push({
				id: key, 
				...products[key]
			})
		}
	}

	productsToArr();

    return (
        <>
            <CartCount />
            <ProductList products={productsArr} />
        </>
    )
}

export default Home;