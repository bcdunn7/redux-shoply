import './App.css';
import ProductList from './ProductList';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function App() {

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
		<div className="App">
			<header className="App-header">
				<h1>Shoply</h1>
				<Cart />
				<ProductList products={productsArr} />
			</header>
		</div>
	);
}

export default App;
