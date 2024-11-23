"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../api/products/route";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Heading from "../components/Heading";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch("/api/products"); 
        const productsData: Product[] = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-5xl font-bold">
        Please Wait...
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Heading title="Featured Products" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg hover:text-blue-500 transition duration-300 ease-in"
          >
            <Link href={`/add/${product.id}`}>
              <div className="flex justify-center mb-4">
                <Image
                  src={product.image || "/path/to/placeholder-image.jpg"}
                  alt={product.title}
                  width={200}
                  height={200}
                  unoptimized
                  className="rounded-lg h-96 object-fit cursor-pointer"
                />
              </div>
            </Link>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500 w-6 h-6" />
              ))}
              <FaStarHalfAlt className="text-yellow-500 w-6 h-6" />
              <span className="text-gray-700 text-lg font-medium">4.5/5</span>
            </div>
            <h3 className="text-xl font-semibold text-center">
              {product.title}
            </h3>
            <p className="text-center text-gray-700 mt-2">
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
