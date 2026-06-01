import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

import { getProducts } from "../../services/Api";

import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    const data = await getProducts();

    setProducts(data);
  };

  return (

    <div className="products-page">

      <h1 className="products-heading">
        Our Products
      </h1>

      <div className="products-container">

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>

    </div>
  );
}

export default Products;