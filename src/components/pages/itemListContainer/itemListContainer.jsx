import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../../productCard/ProductCard';
import products from '../../../Productos';
import { CartContext } from '../../common/CartContext';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    if (categoryId) {
      const filtered = products.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div className="container my-5">
      <h2>{greeting}</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => addItemToCart(product)}
            />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría</p>
        )}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;