import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {

    return (
        <div>
            {products.map(product => {
                return (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image_url={product.image_url}
                    />
                )
            })}
        </div>
    )
};

export default ProductList;