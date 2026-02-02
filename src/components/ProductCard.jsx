import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [isBack, setIsBack] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div
        className="product-card-image"
        onMouseEnter={() => setIsBack(true)}
        onMouseLeave={() => setIsBack(false)}
      >
        <img
          src={isBack ? product.images.back : product.images.front}
          alt={`${product.name} ${isBack ? 'back' : 'front'}`}
        />
        <span className="product-card-flip-hint">Hover for back</span>
      </div>
      <div className="product-card-info">
        <h3>{product.shortName}</h3>
        <span className="product-card-price">${product.price}</span>
      </div>
    </Link>
  );
}