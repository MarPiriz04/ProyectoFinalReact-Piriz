import PropTypes from 'prop-types';
import ProductCard from '../../productCard/ProductCard';

const ItemList = ({ products, addToCart }) => {
    return (
        <div className="row">
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={() => addToCart(product)}
                    />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Acepta tanto string como number
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ItemList;

