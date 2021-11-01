import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductPage = () => {

    const { id } = useParams();

    const product = useSelector(state => state.products[id])

    console.log(product);

    if (!product) return <p>Sorry, product not found :/</p>

    return (
        <>  
            <p>Product Page</p>
            <ProductCard 
                key={id}
                id={id}
                name={product.name}
                price={product.price}
                description={product.description}
                image_url={product.image_url}
            />
        </>
    )
}

export default ProductPage;