import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">

      <h1 className="checkout-title">
        Checkout
      </h1>

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-left">

          <div className="checkout-card">

            <h2>
              Delivery Address
            </h2>

            <div className="address-card">

              <h3>Kishor M</h3>

              <p>
                Kollam, Kerala
              </p>

              <p>
                PIN: 691001
              </p>

              <p>
                Mobile: +91 9876543210
              </p>

            </div>

          </div>

          <div className="checkout-card">

            <h2>
              Payment Method
            </h2>

            <div className="payment-options">

              <div className="payment-option">

                <label>

                  <input
                    type="radio"
                    name="payment"
                  />

                  Cash On Delivery

                </label>

              </div>

              <div className="payment-option">

                <label>

                  <input
                    type="radio"
                    name="payment"
                  />

                  UPI Payment

                </label>

              </div>

              <div className="payment-option">

                <label>

                  <input
                    type="radio"
                    name="payment"
                  />

                  Credit / Debit Card

                </label>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="checkout-right">

          <div className="order-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>Items</span>

              <span>3</span>

            </div>

            <div className="summary-row">

              <span>Delivery</span>

              <span>Free</span>

            </div>

            <div className="summary-row">

              <span>Discount</span>

              <span style={{color:"#16a34a"}}>
                - ₹50
              </span>

            </div>

            <hr />

            <div className="summary-row total">

              <span>Total</span>

              <span>₹1999</span>

            </div>

            <button className="place-order-btn">
              Place Order
            </button>

            <p className="security-note">
              🔒 Secure Checkout Guaranteed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;