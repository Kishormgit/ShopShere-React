import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";

import "./Navbar.css";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const { setSearchTerm } = useContext(SearchContext);

  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = () => {

    setSearchTerm(searchInput);

    navigate("/products");
  };

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

        {/* SEARCH BAR */}

        <li className="search-container">

          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) =>
              setSearchInput(e.target.value)
            }
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </li>

        {/* CART */}

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