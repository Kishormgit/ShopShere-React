import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some products and start shopping.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1 className="cart-title">
        Shopping Cart
      </h1>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <div className="cart-image-box">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="cart-item-details">

                <p className="stock">
                  In Stock
                </p>

                <h3>
                  {item.title}
                </h3>

                <p className="delivery">
                  FREE Delivery • Delivery by Tomorrow
                </p>

                <div className="price-row">

                  <span className="price">
                    ₹ {item.price}
                  </span>

                  <span className="category-tag">
                    {item.category}
                  </span>

                </div>

                <p className="subtotal">
                  Subtotal :
                  ₹ {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="qty-section">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <div className="action-links">

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Delete
                  </button>

                  <span>|</span>

                  <button>
                    Save For Later
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          {/* <div className="summary-row">
            <span>Discount</span>
            <span className="discount">
              - ₹ 50
            </span>
          </div> */}

          <hr />

          <div className="summary-row total">

            <span>Total</span>

            <span>
              ₹ {totalAmount.toFixed(2)}
            </span>

          </div>

          <button
            className="checkout-btn"
            
          >
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;