import { filterProductsByCategory } from "../../utils/filterProductsByCategory";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

// データをサーバーサイドでフェッチする関数
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = filterProductsByCategory("bag");
  return products;
}

// サーバーコンポーネント
const BagPage = async () => {
  const products = await fetchProducts();

  return <ProductList products={products} categoryName="Bag" />;
};

export default BagPage;
