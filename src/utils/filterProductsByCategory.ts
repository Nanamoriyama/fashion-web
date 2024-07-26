import { products } from "../data/products";
import { Product } from "../types";

export const filterProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.categories.includes(category));
};
