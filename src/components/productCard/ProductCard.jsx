import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../components/common/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItemToCart(product, quantity);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            {/* Selector de Cantidad */}
            <ItemQuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                maxStock={product.stock}
            />

            {/* Botón de Agregar al Carrito */}
            <button onClick={handleAddToCart} className="add-to-cart-button">
                Añadir al Carrito
            </button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};
export default ProductCard;

