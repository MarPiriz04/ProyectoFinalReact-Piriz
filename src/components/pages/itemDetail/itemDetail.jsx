import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../common/CartContext'; 
import Swal from 'sweetalert2';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product);

    // SweetAlert para confirmar el agregado desde los detalles
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${product.name} ha sido añadido al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};
ItemDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
