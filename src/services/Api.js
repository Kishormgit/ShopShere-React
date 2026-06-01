const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {

  const response = await fetch(BASE_URL);

  const data = await response.json();

  return data;
};

export const getSingleProduct = async (id) => {

  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const data = await response.json();

  return data;
};