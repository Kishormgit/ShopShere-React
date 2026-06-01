import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import "./Navbar.css";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ShopSphere</h2>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li className="cart-icon">

          <Link to="/cart">
            <FaShoppingCart />

            {totalItems > 0 && (
              <span className="cart-count">
                {totalItems}
              </span>
            )}

          </Link>

        </li>

      </ul>

    </nav>
  );
}

export default Navbar;