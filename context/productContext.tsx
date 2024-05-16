"use client";
import { createContext } from "react";
import { Product } from "@/types/product";
import { ProductGroup } from "./productProvider";

export interface ProductContextType {
  productList: Product[];
  loading: boolean;
  error: unknown;
  productGroup: ProductGroup | undefined;
  categories: string[];
  updateActiveCategory: (category: string) => void;
  filteredProducts: Product[];
  isFilterByCategory: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
