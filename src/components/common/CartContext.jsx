import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cargar datos del carrito desde localStorage al iniciar
  const initialCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  // Guardar cambios en el carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity + quantity > product.stock) {
        Swal.fire({
          title: 'Stock insuficiente',
          text: `Solo hay ${product.stock} unidades disponibles.`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      } else {
        setCartItems(cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ));
        Swal.fire({
          title: 'Producto añadido',
          text: `Has añadido ${quantity} unidad(es) al carrito.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    } else {
      if (quantity > product.stock) {
        Swal.fire({
          title: 'Stock insuficiente',
          text: `Solo hay ${product.stock} unidades disponibles.`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      } else {
        setCartItems([...cartItems, { ...product, quantity }]);
        Swal.fire({
          title: 'Producto añadido',
          text: `Has añadido ${quantity} unidad(es) al carrito.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    Swal.fire({
      title: 'Producto eliminado',
      text: 'El producto ha sido eliminado del carrito.',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};