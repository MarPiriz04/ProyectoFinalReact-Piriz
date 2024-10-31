import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ quantity, setQuantity, maxStock }) => {
    const handleIncrease = () => {
        if (quantity < maxStock) {
            setQuantity(quantity + 1);
        } else {
            // Opcional: mostrar alerta si se alcanza el máximo stock
            Swal.fire({
                title: 'Límite de stock alcanzado',
                text: `Solo puedes añadir hasta ${maxStock} unidades.`,
                icon: 'warning',
                confirmButtonText: 'OK',
            });
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            // Opcional: mostrar alerta si se alcanza el mínimo
            Swal.fire({
                title: 'Cantidad mínima',
                text: 'No puedes reducir la cantidad por debajo de 1.',
                icon: 'info',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="item-quantity-selector">
            <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease} disabled={quantity >= maxStock}>+</button>
        </div>
    );
};

ItemQuantitySelector.propTypes = {
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired,
    maxStock: PropTypes.number.isRequired,
};

export default ItemQuantitySelector;
