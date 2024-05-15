"use client";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import axios from "axios";

const useProductList = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        setLoading(true);

        const storedProductList = sessionStorage.getItem("productList");
        if (storedProductList) {
          setProductList(JSON.parse(storedProductList));
          setLoading(false);
          return;
        }
        // const response = await fetch("http://localhost:8080/products");
        // if (!response.ok) {
        //   throw new Error("Failed to fetch product.");
        // }
        // const data = await response.json();
        // console.log(data.result);
        // setProductList(data.result);
        // sessionStorage.setItem("productList", JSON.stringify(data.result));
        // setLoading(false);
        const response = await axios.get("http://localhost:8080/products");
        const data = response.data;
        console.log(data);
        setProductList(data);
        sessionStorage.setItem("productList", data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);
  return { productList, loading, error };
};

export default useProductList;
