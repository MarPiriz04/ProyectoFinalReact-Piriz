import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import './AddItemButton.css';

const AddItemButton = ({ onAddToCart, quantity }) => {
    const handleClick = () => {
        onAddToCart(quantity);
        Swal.fire({
            title: 'Producto añadido al carrito',
            text: `Has añadido ${quantity} unidad(es) al carrito.`,
            icon: 'success',
            confirmButtonText: 'OK',
        });
    };

    return (
        <button className="add-item-button" onClick={handleClick}>
            Agregar al Carrito
        </button>
    );
};

AddItemButton.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default AddItemButton;
