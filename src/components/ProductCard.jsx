"use client";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm md:max-w-md rounded overflow-hidden hover:shadow-lg">
      <figure className="px-3 py-2">
        <img className="w-full" src={product.image} alt={product.title} />
      </figure>
      <div className="px-6 py-4 text-center">
        <h3 className="font-bold text-xl text-gray-800 bg-gray-300 dark:bg-gray-700 dark:text-white mb-2">{product.title}</h3>
        <p className="text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-white text-base line-clamp-1">
          {product.description}
        </p>
        <p className="text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-white text-base">Price: {product.price}</p>
        <p className="text-gray-700  bg-gray-300 dark:bg-gray-700 dark:text-white text-base">Rating: {product.rating}</p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-blue-600 dark:bg-blue-700 text-black dark:text-white">
        {product.inStock ? (
          <button
            className="bg-blue-500 hover:scale-105 hover:shadow-lg font-bold py-2 px-4 w-full rounded"
            onClick={() => console.log("clicked")}
          >
            Buy Now
          </button>
        ) : (
          <button
            className="bg-blue-300 dark:bg-blue-300 font-bold py-2 px-4 w-full rounded disabled:opacity-75"
            disabled
            onClick={() => console.log("clicked")}
          >
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
