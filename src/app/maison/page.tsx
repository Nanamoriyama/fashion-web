import { filterProductsByCategory } from "../../utils/filterProductsByCategory";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

// データをサーバーサイドでフェッチする関数
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = filterProductsByCategory("maison");
  return products;
}

// サーバーコンポーネント
const MaisonPage = async () => {
  const products = await fetchProducts();

  return <ProductList products={products} categoryName="Maison" />;
};

export default MaisonPage;
