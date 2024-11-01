import { Box, Typography, Button, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'; 
import Swal from 'sweetalert2';

const Checkout = ({ cartItems, onConfirmPurchase }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirmPurchase = async () => {
        const order = {
            items: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            total,
            date: new Date().toISOString(),
        };

        try {
            await addDoc(collection(db, 'orders'), order);
            Swal.fire({
                title: 'Compra confirmada',
                text: 'Tu pedido ha sido registrado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            onConfirmPurchase(); // Llama a la función de confirmación (puedes usarla para limpiar el carrito)
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al registrar tu pedido. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            console.error('Error al guardar el pedido: ', error);
        }
    };

    return (
        <Box p={3}>
            <Typography variant="h5" mb={2}>Resumen de Compra</Typography>
            <Divider />
            {cartItems.map(item => (
                <Box key={item.id} display="flex" justifyContent="space-between" my={2}>
                    <Typography>{item.name}</Typography>
                    <Typography>${item.price * item.quantity}</Typography>
                </Box>
            ))}
            <Divider />
            <Typography variant="h6" align="right" my={2}>Total: ${total}</Typography>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleConfirmPurchase}
                style={{ marginTop: '20px' }}
            >
                Confirmar Compra
            </Button>
        </Box>
    );
};

Checkout.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onConfirmPurchase: PropTypes.func.isRequired,
};

export default Checkout;