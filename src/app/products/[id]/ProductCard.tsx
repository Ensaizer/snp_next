import React from "react";
import AddToCard from "./AddToCard";

const product = {
  id:1,
  article: 'hn554987987',
  brand: 'gsgsgsg',
category: 'fafaf',
deliveryTime: 40,
name: 'двигатель',
description :'Описание ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание',
minOrder: 10,
multiplicity: 10,
price: 60000,
stock: 1,
entries: [],
}
export default function ProductCard({productId}) {
  console.log(productId)
  return (
    <div className="flex">
    <div className="flex flex-wrap w-1/2">
      <div className="w-1/3 p-4">
        <p className="font-bold">Артикул</p>
      </div>
      <div className="w-2/3 p-4">
        <p>{product.article}</p>
      </div>
      <div className="w-1/3 p-4">
        <p className="font-bold">Название</p>
      </div>
      <div className="w-2/3 p-4">
        <p>{product.name}</p>
      </div>
      <div className="w-1/3 p-4">
        <p className="font-bold">Бренд</p>
      </div>
      <div className="w-2/3 p-4">
        <p>{product.brand}</p>
      </div>
      <div className="w-1/3 p-4">
        <p className="font-bold">Описание</p>
      </div>
      <div className="w-2/3 p-4">
        <p>{product.description}</p>
      </div>
    </div>
    <div className="w-1/2"><AddToCard product={product}/></div>
    </div>
  );
}
