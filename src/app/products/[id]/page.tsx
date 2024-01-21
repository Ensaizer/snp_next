import React from "react";
import ProductCard from "./ProductCard";

export default function ProductPage({params}) {
  console.log(params)
  return (
    <div className="container mx-auto">
      <ProductCard productId={params.id}/>
    </div>
);
}
