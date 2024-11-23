"use client";

import { useCart } from "@/app/cartContext";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from '../components/Button3'


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleDelete = (id: number) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    alert("This Feature will available soon!");
  };

  return (
    <div className="max-w-screen-xl mx-auto  p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-left">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 h-[60dvh] flex justify-center items-center text-3xl font-bold">Your cart is empty</p>
      ) : (
        <div className="grid gap-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center py-4 border p-10 rounded-xl shadow-md space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-4 flex-col lg:flex-row">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  unoptimized
                  className="rounded border shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-xl lg:w-[400px] w-full">
                    {item.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="p-2 bg-red-500 rounded-full hover:bg-red-600 text-white transition-all"
                >
                  <FaMinus />
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="text-gray-800 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-xl font-bold text-gray-900">
              Total: ${getTotal().toFixed(2)}
            </p>
            <Button text="Checkout"
              onClick={handleCheckout}
            />
              
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
