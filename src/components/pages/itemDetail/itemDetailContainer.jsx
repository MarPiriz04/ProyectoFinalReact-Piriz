import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../../Productos';
import { CartContext } from '../../common/CartContext';
import ItemQuantitySelector from '../../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../../AddItemButton/AddItemButton';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada

  const handleAddToCart = () => {
    addItemToCart(product, quantity); // Agrega el producto con la cantidad seleccionada
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      
      {/* Selector de Cantidad */}
      <ItemQuantitySelector 
        quantity={quantity} 
        setQuantity={setQuantity} 
        maxStock={product.stock} 
      />
      
      {/* Botón de Agregar al Carrito */}
      <AddItemButton onAddToCart={handleAddToCart} quantity={quantity} />
    </div>
  );
};

export default ItemDetailContainer;

