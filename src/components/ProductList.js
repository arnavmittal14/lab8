import React, { useEffect } from "react";
import { fetchProducts } from "../services/apiService";
import { useProductsContext } from "../context/ProductsContext"; // Change to named import

const ProductList = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [setProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
