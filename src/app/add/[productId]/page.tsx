"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button3 from "@/app/components/Button3";
import { useCart } from "@/app/cartContext";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-5xl font-bold">
        Please Wait...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    console.log("Product added to cart:", product);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container p-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
          <Image
            alt={product.title}
            src={product.image}
            width={400}
            height={400}
            unoptimized
            className="rounded-lg h-1/2 object-fit border p-5 cursor-pointer shadow-lg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PRODUCT DETAILS
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-6 h-6" />
                ))}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Add any additional logic for product options */}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <div className="flex ml-auto">
                <Button3 text="Add to Cart" onClick={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
