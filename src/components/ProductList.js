import React from 'react';
import '../styles/ProductList.css';

function ProductList({ products, filtersVisible }) {
  return (
    <div className='products-main-container'>
      <div className={`product-list ${filtersVisible ? 'three-column' : 'four-column'}`}>
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default ProductList;
