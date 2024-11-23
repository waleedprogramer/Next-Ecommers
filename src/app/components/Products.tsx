import React from "react";
import Image from "next/image";
import Link from "next/link";
import denim1 from "../images/denim1.png";
import denim2 from "../images/denim2.png";
import denim4 from "../images/denim4.png";
import denim3 from "../images/denim3.png";
import shirt1 from "../images/shirt1.png";
import shirt2 from "../images/shirt2.png";
import Heading from "./Heading";
import Button from "./Button2";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <section id="products" className="products p-5 ">
      <div className=" mx-auto">
        <div className="row mb-8 text-center">
          <div>
            <Heading title="Top Products"/>
          </div>
        </div>

        <div className="row grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 ">
          {[
            {
              id: 1,
              name: "Winter Long Sleeves black white",
              price: "$400.00",
              oldPrice: "$500.00",
              imgFirst: denim1,
              imgSecond: denim2,
              rating: 4,
            },
            {
              id: 2,
              name: "Mirowen Women's Back Tuck Long G Jean",
              price: "$600.00",
              oldPrice: "$650.00",
              imgFirst: denim4,
              imgSecond: denim3,
              rating: 4,
            },
            {
              id: 3,
              name: "Winter Long Sleeves black white",
              price: "$500.00",
              oldPrice: "$700.00",
              imgFirst: shirt1,
              imgSecond: shirt2,
              rating: 3,
            },
          ].map((product) => (
            <div
              key={product.id}
              className="text-center  rounded-lg transition duration-300"
            >
              <Link href="#" className="block mb-4 ">
                <div className="relative ">
                  <span className="absolute top-4 left-4 bg-black text-white  text-sm uppercase px-3 py-1 rounded">
                     Sale
                  </span>
                  <Image
                    src={product.imgFirst}
                    alt={product.name}
                    className="h-96 object-fit w-full transition-opacity duration-500 rounded-xl  bg-gray-100 "
                    
                  />
                  <Image
                    src={product.imgSecond}
                    alt={product.name}
                    className="absolute inset-0 w-full h-96 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gray-100"
                  />
                </div>
                <div className="pt-4 space-y-2">
                <div className="flex items-center justify-center space-x-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 w-6 h-6" />
                    ))}
                   
                    <span className="text-gray-700 text-lg font-medium">
                      5/5
                    </span>
                  </div>
                  <h3 className="text-lg font-medium hover:text-blue-400 trasnition ease-in">
                    {product.name}
                  </h3>
                  <p className="text-black font-medium">
                    {product.price}{" "}
                    <del className="text-gray-500">{product.oldPrice}</del>
                  </p>
                 
                 
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <Button />
        </div>

      </div>
    </section>
  );
};

export default Products;
