import { useContext } from 'react';
import { CartContext } from '../../common/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeItemFromCart } = useContext(CartContext);

    // Calcular el total del carrito
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: ${item.price * item.quantity}</p>
                                <button 
                                    onClick={() => removeItemFromCart(item.id)} 
                                    className="remove-button"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
