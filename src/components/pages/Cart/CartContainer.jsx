// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from 'react';
import Cart from './Cart';
import { CartContext } from '../../common/CartContext';

const CartContainer = () => {
    const { cartItems, total } = useContext(CartContext);

    return (
        <div>
            <Cart cartItems={cartItems} total={total} />
        </div>
    );
};

export default CartContainer;
