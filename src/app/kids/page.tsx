import { filterProductsByCategory } from "../../utils/filterProductsByCategory";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

// データをサーバーサイドでフェッチする関数
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = filterProductsByCategory("kids");
  return products;
}

// サーバーコンポーネント
const KidsPage = async () => {
  const products = await fetchProducts();

  return <ProductList products={products} categoryName="Kids" />;
};

export default KidsPage;
