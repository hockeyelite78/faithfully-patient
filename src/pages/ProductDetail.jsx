import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState(null);
  const [showBack, setShowBack] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="pdp-not-found">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const handleBuy = async () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);

    const { loadStripe } = await import('@stripe/stripe-js');
    const { STRIPE_PUBLISHABLE_KEY, SHIPPING_RATE_ID } = await import('../data/stripe');
    const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: product.stripePriceId, quantity: 1 }],
      mode: 'payment',
      shippingAddressCollection: {
        allowedCountries: ['US'],
      },
      shippingOptions: [
        { shippingRate: SHIPPING_RATE_ID },
      ],
      successUrl: window.location.origin + '/shop?success=true',
      cancelUrl: window.location.href,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
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

            {/* Size Selector */}
            <div className="pdp-sizes">
              <div className="pdp-sizes-label">
                <span>Size</span>
                {sizeError && <span className="pdp-size-error">Please select a size</span>}
              </div>
              <div className="pdp-size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`pdp-size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

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