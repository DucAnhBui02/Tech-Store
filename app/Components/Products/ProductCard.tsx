"use client";
useState;

import Image from "next/image";
import { Product } from "./Product";
import { useState } from "react";
import Link from "next/link";
interface datalist {
  id: number;
  name: string;
  image: string;
  price: number | string;
  description: string;
}
interface ProductCardProps {
  image: string;
  title: string;
  data: datalist[];
}
const ProductCard: React.FC<ProductCardProps> = ({ image, title, data }) => {
  return (
    <div className="mt-2 mb-4">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 ">
        <div className="relative max-w-full">
          <div className="h-36 flex flex-col items-center justify-between text-white absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <Link href="#" className="text-xs underline">
              See All Products
            </Link>
          </div>

          <Image
            src={image}
            alt="product banner"
            width={150}
            height={150}
            style={{ width: 232, height: 300 }}
          />
        </div>

        {data.map((category, index) => {
          return <Product data={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
