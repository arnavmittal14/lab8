import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleProductDeleted = (deletedProductId) => {
    setProducts(currentProducts =>
      currentProducts.filter(product => product.id !== deletedProductId));

    alert(' Product deleted successfully ! ');
  };

  const saveProduct = (product) => {
    setProducts((currentProducts) => {
      const index = currentProducts.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        const newProducts = [...currentProducts];
        newProducts[index] = product;
        return newProducts;
      } else {
        const newProduct = product.id
          ? product
          : { ...product, id: Date.now() };
        return [...currentProducts, newProduct];
      }
    });
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, saveProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider; // Default export ProductsProvider
