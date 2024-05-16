"use client";
import { Product } from "@/types/product";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { config } from "@/constants/url";
import ProductContext, { ProductContextType } from "./productContext";
export interface ProductGroup {
  // Category name: Multiple products
  // Hashmap category as its key,
  // Array of product as its value
  [key: string]: Product[];
}

export const ProductProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<ProductGroup>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [isFilterByCategory, setIsFilterByCategory] = useState<boolean>(false);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          config.BASE_URL + config.endpoints.products
        );
        const data = (await response.json()) as Product[];
        const uniqueCategories = new Set(
          data.map((product) => product.category)
        );
        const categoriesArray = Array.from(uniqueCategories);
        const groupData: ProductGroup = {};
        categoriesArray.forEach((category) => {
          const currentCategoryProducts = data.filter(
            (product) => product.category === category
          );
          groupData[category] = currentCategoryProducts;
        });

        console.log(data);
        setProductList(data);
        setProductGroup(groupData);
        setCategories(categoriesArray);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  const updateActiveCategory = (category: string) => {
    if (!category) {
      setFilteredProducts(productList);
      setIsFilterByCategory(false);
      return;
    }
    const filtered = productList.filter((each) => each.category === category);
    setIsFilterByCategory(true);
    setFilteredProducts(filtered);
  };

  const value: ProductContextType = {
    productList,
    loading,
    error,
    productGroup,
    categories,
    updateActiveCategory,
    filteredProducts,
    isFilterByCategory,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("Context not found");
  return ctx;
};

export default ProductProvider;
