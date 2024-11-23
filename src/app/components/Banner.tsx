"use client";
import React from "react";
import Image from "next/image";
import banner from "../images2/banner.jpg";
import Button from "./Button1";
import Link from "next/link";


const Banner: React.FC = () => {
  return (
    <section className="relative w-full lg:h-[250px] h-[300px]">
    <Image
  src={banner}
  alt="Banner"
  fill
  unoptimized
  className="object-cover"
/>


      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:gap-10 text-white text-center px-4 ">
        <h1 className="text-4xl font-bold leading-tight">
          TOP <span className="text-blue-500">FASHION</span>
          <br className="lg:block hidden" /> DEALS
        </h1>
        <Link href='./shop'>
        <Button text="Shop Now" />
        </Link>
        <p className="space-y-4 text-lg flex flex-col items-center lg:items-start">
          <span className="bg-white text-blue-500 p-1 font-bold m-1 transform -rotate-60 cursor-pointer hover:opacity-90">
            Exclusive COUPON
          </span>
          <div className="flex items-center ">
            <span className="transform -rotate-90 font-bold text-[12px] text-gray-300 ">
              UP TO
            </span>
            <span className="bg-blue-500 text-white p-1 mt-1 text-2xl font-bold transform -rotate-10">
              $100
            </span>
            <span className="font-bold">
            OFF
            </span>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Banner;
