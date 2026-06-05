import { useEffect, useState, useContext } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

import { getProducts } from "../../services/Api";

import { SearchContext } from "../../context/SearchContext";

import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);

  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    const data = await getProducts();

    setProducts(data);
  };

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (

    <div className="products-page">

      <h1 className="products-heading">
        Our Products
      </h1>

      <div className="products-container">

        {
          filteredProducts.length > 0 ?

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

          :

          <h2>
            No Products Found
          </h2>
        }

      </div>

    </div>
  );
}

export default Products;