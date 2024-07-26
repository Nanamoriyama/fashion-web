import { use } from "react";
import { filterProductsByCategory } from "../../utils/filterProductsByCategory";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

// サーバーサイドレンダリング用のデータフェッチ関数
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = filterProductsByCategory("woman");
  return products;
}

// サーバーコンポーネント
const WomanPage = () => {
  const products = use(fetchProducts());

  return <ProductList products={products} categoryName="Women" />;
};

export default WomanPage;
