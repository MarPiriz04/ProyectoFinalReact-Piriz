import { Box, Typography, Button, Divider } from '@mui/material';
import PropTypes from 'prop-types';

const Checkout = ({ cartItems, onConfirmPurchase }) => (
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
        <Button variant="contained" color="primary" fullWidth onClick={onConfirmPurchase} style={{ marginTop: '20px' }}>
            Confirmar Compra
        </Button>
    </Box>
);
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