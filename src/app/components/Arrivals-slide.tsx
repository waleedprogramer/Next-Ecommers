"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Heading from "./Heading";
import a1 from "../images2/a1.jpg";
import a2 from "../images2/a2.jpg";
import a3 from "../images2/a3.jpg";
import a4 from "../images2/a4.jpg";
import a5 from "../images2/a5.jpg";
import a6 from "../images2/a6.jpg";
import a7 from "../images2/a7.jpg";
import a8 from "../images2/a8.jpg";
import a9 from "../images2/a9.jpg";
import a10 from "../images2/a10.jpg";
import a11 from "../images2/a11.jpg";
import a12 from "../images2/a12.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import type { StaticImageData } from "next/image";

import Button from "./Button2";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  imgFirst: StaticImageData;
  imgSecond: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beach Force Sunglass",
    price: "$80.00",
    imgFirst: a2,
    imgSecond: a1,
  },
  {
    id: 2,
    name: "Mens Shoulder Bags",
    price: "$600.00",
    oldPrice: "$650.00",
    imgFirst: a3,
    imgSecond: a4,
  },
  {
    id: 3,
    name: "Women 3 Faux Shoes",
    price: "$120.00",
    imgFirst: a5,
    imgSecond: a6,
  },
  {
    id: 4,
    name: "Sunrise Pink",
    price: "$150.00",
    oldPrice: "$180.00",
    imgFirst: a8,
    imgSecond: a7,
  },
  {
    id: 5,
    name: "Sneakers Converse",
    price: "$500.00",
    oldPrice: "$700.00",
    imgFirst: a10,
    imgSecond: a9,
  },
  {
    id: 6,
    name: "New Balance Fresh Foam",
    price: "$600.00",
    oldPrice: "$750.00",
    imgFirst: a11,
    imgSecond: a12,
  },
];

const Arrival = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div>
        <Heading title="New Arrivals" />
      </div>
      <div className="relative p-16">
        <ArrowLeft
          className="absolute top-[180px] -translate-y-1/2 left-0 z-10 cursor-pointer bg-black opacity-50 text-white rounded-full font-bold shadow-lg hover:opacity-100 transition ease-in"
          onClick={() => swiperRef.current?.slidePrev()}
          size={28}
        />
        <ArrowRight
          className="absolute top-[180px]  -translate-y-1/2 right-0 z-10 cursor-pointer bg-black opacity-50 font-bold text-white rounded-full shadow-lg hover:opacity-100 transition ease-in"
          onClick={() => swiperRef.current?.slideNext()}
          size={28}
        />

        <Swiper
          className="w-full"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            740: { slidesPerView: 3, spaceBetween: 30 },
            1300: { slidesPerView: 5, spaceBetween: 40 },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, A11y]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="text-center items-center flex gap-10 justify-center flex-col">
                <div className="relative  lg:w-[300px] w-full cursor-pointer">
                  <Image
                    src={product.imgFirst}
                    alt={product.name}
                    className="w-full h-64 transition-opacity duration-500 rounded-xl bg-gray-100 object-fit"
                    width={300}
                    height={300}
                    unoptimized

                  />
                  <Image
                    src={product.imgSecond}
                    alt={product.name}
                    className="absolute inset-0 w-full h-64 opacity-0 hover:opacity-100 transition duration-500 rounded-xl bg-gray-100 object-fit"
                    width={300}
                    height={300}
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {[...Array(4)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 w-6 h-6" />
                    ))}
                    <FaStarHalfAlt className="text-yellow-500 w-6 h-6" />
                    <span className="text-gray-700 text-lg font-medium">
                      4.5/5
                    </span>
                  </div>
                  <h3 className="text-lg font-medium hover:text-gray-600">
                    {product.name}
                  </h3>
                  <p className="text-black font-medium">
                    {product.price}{" "}
                    <del className="text-gray-500">{product.oldPrice}</del>
                  </p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-2">
          <Button />
        </div>
      </div>
    </>
  );
};

export default Arrival;
