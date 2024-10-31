import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Brief = ({ items }) => (
    <Box p={2}>
        <Typography variant="h6">Detalle de Compra</Typography>
        {items.map(item => (
            <Box key={item.id} display="flex" justifyContent="space-between" py={1}>
                <Typography>{item.name} x {item.quantity}</Typography>
                <Typography>${item.price * item.quantity}</Typography>
            </Box>
        ))}
        <Box display="flex" justifyContent="space-between" fontWeight="bold">
            <Typography>Total:</Typography>
            <Typography>${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Typography>
        </Box>
    </Box>
);
Brief.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Brief;