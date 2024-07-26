import { filterProductsByCategory } from "../../utils/filterProductsByCategory";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

// データをサーバーサイドでフェッチする関数
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = filterProductsByCategory("jewelry");
  return products;
}

// サーバーコンポーネント
const JewelryPage = async () => {
  const products = await fetchProducts();

  return <ProductList products={products} categoryName="Jewelry" />;
};

export default JewelryPage;
