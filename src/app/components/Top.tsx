'use client';

import { useState } from "react";
import Link from "next/link";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="bg-gray-100 text-gray-500 lg:text-sm text-[10px] py-4 text-center relative">
        FREE SHIPPING ON ORDERS OVER $75.{" "}
        <Link href="/" className="transition ease-in hover:text-blue-500">
          LEARN MORE!
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    )
  );
};

export default TopBar;
