import { Link } from 'react-router-dom';
import CartWidget from '../../common/cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar">
        <Link to="/" className="brand">Inicio</Link>
        <Link to="/category/analgesicos">Analgésicos</Link>
        <Link to="/category/suplementos">Suplementos</Link>
        <Link to="/category/higiene">Higiene</Link>
        <Link to="/category/anticonceptivos">Anticonceptivos</Link>
        <CartWidget />
    </nav>
);

export default NavBar;