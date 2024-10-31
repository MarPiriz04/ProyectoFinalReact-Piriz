import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/navbar/NavBar';
import ItemListContainer from './components/pages/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/pages/itemDetail/itemDetailContainer';
import Cart from './components/pages/Cart/Cart';
import Footer from './components/layouts/footer/Footer';
import Checkout from './components/pages/checkOut/CheckOut';
import { CartProvider } from './components/common/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
