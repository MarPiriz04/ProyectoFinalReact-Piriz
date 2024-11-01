import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from '../../pages/itemListContainer/itemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { CartContext } from '../../common/CartContext';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        let q;

        if (categoryId) {
          q = query(productsRef, where('category', '==', categoryId));
        } else {
          q = productsRef;
        }

        const productsSnapshot = await getDocs(q);
        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFilteredProducts(productsList);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container my-5">
      <h2>{greeting}</h2>
      <ItemList products={filteredProducts} addToCart={addItemToCart} />
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
