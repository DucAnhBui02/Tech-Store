"use client";
import Image from "next/image";
import { products } from "@/utils/products";
import Link from "next/link";
import { Product } from "./Product";

const ProductList = () => {
  const slice = products.slice(0, 6);

  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Products
              </h2>
              <Link href="#" className="text-xs text-sky-500 underline">
                See All New Products
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
              {slice.map((product: any, index) => {
                return <Product data={product} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
