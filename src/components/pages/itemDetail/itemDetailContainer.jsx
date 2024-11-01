import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { CartContext } from '../../common/CartContext';
import ItemQuantitySelector from '../../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../../AddItemButton/AddItemButton';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const productSnap = await getDoc(productRef);
        
        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product, quantity); // Agrega el producto con la cantidad seleccionada
    }
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

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
