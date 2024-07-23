"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { products } from "../../../../data/products"; // ここでproductsデータをインポート
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../features/cart/cartSlice";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const dispatch = useDispatch();

  if (typeof id !== "string") {
    return <div>Invalid product ID</div>;
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      dispatch(
        addItem({
          product: {
            cartID: `${product.id}-${selectedSize}`,
            title: product.title,
            price: product.price,
            image: product.images[0],
            amount: 1,
            detail: product.detail,
          },
        })
      );
      router.push("/cart");
    } else {
      alert("Please select a size.");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4">
      <div className="relative w-full h-96 md:h-[500px]">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index} className="relative w-full h-96 md:h-[500px]">
              <Image
                src={image}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="font-light pt-4">{product.title}</div>
        <div className="font-light text-sm text-stone-400 pt-4">
          {product.detail}
        </div>
        <div className="font-light pt-4 pb-4">${product.price}</div>
      </div>
      <hr className="text-stone-400" />
      <div className="mt-2">
        <div className="font-light text-xs pl-2 pb-2 pt-2">SIZES</div>
        <div className="flex space-x-2 text-xs">
          {product.size.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              className={`px-4 py-2 rounded-full font-light ${
                selectedSize === size ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <hr className="text-stone-400 mt-2" />
      <button
        onClick={handleAddToCart}
        className="w-full mt-4 px-4 py-2 bg-black text-white rounded-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
