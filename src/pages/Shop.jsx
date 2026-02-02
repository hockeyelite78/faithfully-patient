import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './Shop.css';

export default function Shop() {
  return (
    <div className="shop">
      <section className="shop-header">
        <div className="shop-header-inner">
          <span className="shop-label">Collection</span>
          <h1 className="shop-title">All Products</h1>
          <p className="shop-subtitle">{products.length} items</p>
        </div>
      </section>

      <section className="shop-grid-section">
        <div className="shop-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}