// WishlistItem interface
export interface WishlistItem {
  id: string;
  title: string;
  price: string;
  images: string[];
  size: string[];
  link: string;
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}
