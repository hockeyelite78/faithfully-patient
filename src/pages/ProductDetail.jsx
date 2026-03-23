import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [showBack, setShowBack] = useState(false);

  if (!product) {
    return (
      <div className="pdp-not-found">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const handleBuy = () => {
    window.location.href = product.paymentLink;
  };

  return (
    <div className="pdp">
      <div className="pdp-inner">
        {/* Breadcrumb */}
        <nav className="pdp-breadcrumb">
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.shortName}</span>
        </nav>

        <div className="pdp-layout">
          {/* Images */}
          <div className="pdp-images">
            <div
              className={`pdp-main-img ${product.color === 'White' ? 'pdp-main-img--light' : ''}`}
            >
              <img
                src={showBack ? product.images.back : product.images.front}
                alt={`${product.name} ${showBack ? 'back' : 'front'}`}
              />
            </div>
            <div className="pdp-thumbs">
              <button
                className={`pdp-thumb ${!showBack ? 'active' : ''} ${product.color === 'White' ? 'pdp-thumb--light' : ''}`}
                onClick={() => setShowBack(false)}
              >
                <img src={product.images.front} alt="Front view" />
                <span>Front</span>
              </button>
              <button
                className={`pdp-thumb ${showBack ? 'active' : ''} ${product.color === 'White' ? 'pdp-thumb--light' : ''}`}
                onClick={() => setShowBack(true)}
              >
                <img src={product.images.back} alt="Back view" />
                <span>Back</span>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="pdp-info">
            <div className="pdp-info-top">
              <span className="pdp-color-tag">{product.color}</span>
              <h1 className="pdp-name">{product.name}</h1>
              <p className="pdp-price">${product.price}</p>
            </div>

            <p className="pdp-description">{product.description}</p>

            {/* Buy Button */}
            <button className="pdp-buy" onClick={handleBuy}>
              Buy Now &mdash; ${product.price}
            </button>

            {/* Details */}
            <div className="pdp-details">
              <div className="pdp-detail-row">
                <span>Material</span>
                <span>Premium Heavyweight Cotton</span>
              </div>
              <div className="pdp-detail-row">
                <span>Fit</span>
                <span>Relaxed / Oversized</span>
              </div>
              <div className="pdp-detail-row">
                <span>Shipping</span>
                <span>Ships within 3–5 business days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}