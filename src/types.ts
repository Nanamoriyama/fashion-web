// src/types.ts

// WishlistItem interface
export interface WishlistItem {
  id: string;
  title: string;
  price: string;
  images: string[];
  size: string[];
  link: string;
  categories: string[];
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

// Product interface
export interface Product {
  id: string;
  images: string[];
  title: string;
  detail: string;
  price: number;
  size: string[];
  link: string;
  categories: string[];
}
