"use client";
import React, { useState } from "react";

export default function AddToCard({initproduct}) {
  const product = {
    id:1,
    quantity :6,
    multiplicity: 2,
    minOrder: 2,
  }
  const user = {
    id:1,
  }
  const [quantity, setQuantity] = useState(0);
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= product.quantity && Number(e.target.value)%product.multiplicity === 0) {
      setQuantity(Number(e.target.value))}
  }
  const decrementClickHandle = () => {
    if (quantity > product.minOrder) setQuantity((prev)=> prev - product.multiplicity) 
  }
  const incrementClickHandle = () => {
    if (quantity < product.quantity) setQuantity((prev)=> prev + product.multiplicity) 
  }
  const handleAddToCart = async () =>{
  if (quantity >= product.minOrder) {
    const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ quantity, productId:product.id, userId: user.id}),
      });
   }}

  return (
    <form className="max-w-xs mx-auto flex">
      <div>
      <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      />
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          id="decrement-button"
          onClick={decrementClickHandle}
          data-input-quantityer-decrement="quantity-input"
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-quantityer
          data-input-quantityer-min="1"
          data-input-quantityer-max="50"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={quantity}
          onChange={(e)=>changeHandler(e)}
          required
        />
        <button
          type="button"
          id="increment-button"
          onClick={incrementClickHandle}
          data-input-quantityer-increment="quantity-input"
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      </div>
      <div>
      <button className='btn btn-secondary' disabled={!quantity}>Добавить в корзину</button>
      </div>
    </form>
  );
}
