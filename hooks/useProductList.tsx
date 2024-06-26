"use client";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "@/constants/url";

interface ProductGroup {
  // Category name: Multiple products
  // Hashmap category as its key,
  // Array of product as its value
  [key: string]: Product[];
}

const useProductList = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<ProductGroup>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        setLoading(true);

        // const storedProductList = sessionStorage.getItem("productList");
        // if (storedProductList) {
        //   setProductList(JSON.parse(storedProductList));
        //   setLoading(false);
        //   return;
        // }

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
        // sessionStorage.setItem("productList", JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);
  return { productList, productGroup, categories, loading, error };
};

export default useProductList;
