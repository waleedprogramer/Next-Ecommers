"use client";

import { useCart } from "@/app/cartContext";
import Link from "next/link";
import { FaSearch } 
from "react-icons/fa";
import { IoCartOutline,IoSearchOutline, } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";


import { useState } from "react";

const Navbar = () => {
  const { cartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b">
        <div className="flex gap-6 items-center text-3xl font-bold text-blue-400">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-[2px] bg-black mb-1"></span>
            <span className="block w-6 h-[2px] bg-black mb-1"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
          </button>
          <Link href="/">Shopkeeper</Link>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-lg text-gray-700 transition ease-in hover:text-blue-400 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#features"
              className="scroll text-lg text-gray-700 transition ease-in hover:text-blue-400 duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#arrival"
              className="scroll text-lg text-gray-700 transition ease-in hover:text-blue-400 duration-300"
            >
              Arrivals
            </a>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-lg text-gray-700 transition ease-in hover:text-blue-400 duration-300"
            >
              Shop
            </Link>
          </li>
          
          <li>
            <Link
              href="/about"
              className="text-lg text-gray-700 transition ease-in hover:text-blue-400 duration-300"
            >
              About Us
            </Link>
          </li>
          
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for yourself.."
              className="border border-gray-300 bg-gray-100 rounded-full  px-4 py-2 pl-10 w-[350px] focus:outline-none focus:border-blue-400 focus:bg-white trasition all duration-100 ease-in"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex space-x-4 items-center">
         
          <button className="lg:hidden transition ease-in hover:text-blue-400">
            <IoSearchOutline size={28} />
          </button>

          <button className="relative transition ease-in hover:text-blue-400">
            <Link href="/cart">
              <IoCartOutline size={28} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white p-2 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </button>

          <button className="transition ease-in hover:text-blue-400 hidden lg:block">
            <PiUserCircleLight size={28} 
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-100 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-black font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center mt-52 space-y-6">
          <li>
            <Link
              href="/"
              className="block text-lg transition ease-in hover:text-blue-400 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#features"
              className="scroll block text-lg transition ease-in hover:text-blue-400"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#arrival"
             className="scroll block text-lg transition ease-in hover:text-blue-400 duration-300"
            >
              Arrivals
            </a>
          </li>
          <li>
            <Link
              href="/shop"
              className="block text-lg transition ease-in hover:text-blue-400 duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-lg transition ease-in hover:text-blue-400 duration-300"
            >
              About Us
            </Link>
          </li>
          
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
