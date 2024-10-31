import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Link to="/cart" className="cart-widget">
            🛒 <span>{totalItems}</span>
        </Link>
    );
};

export default CartWidget;
