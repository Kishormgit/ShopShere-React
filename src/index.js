import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import CartProvider from "./context/CartContext";

import SearchProvider from "./context/SearchContext";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <SearchProvider>
    <CartProvider>

      <App />

    </CartProvider>
    </SearchProvider>


  </React.StrictMode>
);

reportWebVitals();