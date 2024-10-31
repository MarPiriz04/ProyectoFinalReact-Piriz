/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `Has agregado ${count} productos al carrito`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div>
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
