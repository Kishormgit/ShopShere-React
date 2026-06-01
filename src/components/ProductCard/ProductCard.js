import "./ProductCard.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const goToProductDetail = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (event) => {

    event.stopPropagation();

    addToCart(product);
  };

  const handleBuyNow = (event) => {

    event.stopPropagation();

    addToCart(product);

    navigate("/cart");
  };

  return (

    <div
      className="product-card"
      onClick={goToProductDetail}
    >

      <div className="product-image-container">

        <div className="category-badge">
          {product.category}
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

      </div>

      <div className="product-details">

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="product-rating">
          ⭐ {product.rating.rate}
        </div>

        <p className="product-price">
          ₹ {product.price}
        </p>

        <div className="product-buttons">

          <button
            className="cart-btn"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>

          <button
            className="cart-btn-buy"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;