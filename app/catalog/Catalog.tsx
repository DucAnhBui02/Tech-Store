"use client";
import React, { useState } from "react";
import HomeBanner from "../Components/Banner";
import { Product } from "../Components/Products/Product";
import { products } from "@/utils/products";
import { BarIcon, CatalogIcon, StarIcon } from "../Components/Icons";

const Catalog = () => {
  const [hiddenCategory, setHiddenCategory] = useState(true);
  const [hiddenPrice, setHiddenPrice] = useState(true);
  const slice = products.slice(1, 21);

  const filterPrice = () => {};

  return (
    <>
      <HomeBanner
        image="https://s3-alpha-sig.figma.com/img/7231/256d/42cdb72eb6353d98581cf0dad789764b?Expires=1701043200&Signature=bt6paJV9jriEmuwqKDK3muSpmGaFB0mlyECqXydYg-a40bPRp0188iuhX0CL7bdOCU2NtIYnS2dHN4vOF9qkNmP0Eqxe42PjZXo~lpYvW~yLCYELB0XZT885FVRxzRZwmewUu-nFqqg4Kfe4uCRB~RPo4wUciXRokSruxMT1h1iZpMFRHVEB9-9m6rHNea78~T1gXI3ZDNE7XxuPT8-X1mg-afi2txVzDngDcvb7-iOkoVKuFYHIvlo-zOODfF6Up71CeMYAxj5cv958zVzdU7LCKGP4~j9SOGwzED2W6-yYRUDse8chPpBGHm7FIU0PREAQMNTvLabtXbSAl18coQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        width={1398}
        height={104}
      />
      <div className="text-left text-xs font-normal my-2 cursor-pointer">
        <span className="text-black  hover:underline">Home </span>
        <span className="text-blue-600  hover:underline">›</span>
        <span className="text-black  hover:underline"> Laptops </span>
        <span className="text-blue-600  hover:underline">›</span>
        <span className="text-black hover:underline">
          {" "}
          Everyday Use Notebooks{" "}
        </span>
        <span className="text-blue-600 hover:underline">›</span>
        <span className="text-black hover:underline">
          {" "}
          MSI Prestige Series{" "}
        </span>
        <span className="text-blue-600 hover:underline">›</span>
        <span className="text-neutral-400 hover:underline"> </span>
        <span className="text-gray-400 hover:underline">MSI WS Series</span>
      </div>
      <div className="text-left text-black text-[32px] font-semibold">
        MSI PS Series (20)
      </div>
      <div className="grid grid-flow-col gap-4 mx-auto content-center">
        <div className="w-[184px] text-center text-black text-sm font-semibold cursor-pointer">
          ‹ Back
        </div>
        <div className="w-[560px] bg-white text-gray-400 text-[13px] leading-7">
          Items 1-35 of 61
        </div>
        <div className="rounded-sm border-2 border-gray-300 text-center">
          <span className="text-gray-400 text-[13px] font-semibold font-['Poppins'] leading-7">
            Sort By:
          </span>
          <span className="text-black text-[13px] font-semibold font-['Poppins'] leading-7">
            Position
          </span>
        </div>
        <div className="rounded-sm border-2 border-gray-300 text-center">
          <span className="text-gray-400 text-[13px] font-semibold font-['Poppins'] leading-7">
            Show:{" "}
          </span>
          <span className="text-black text-[13px] font-semibold font-['Poppins'] leading-7">
            35 per page
          </span>
        </div>
        <div className="grid grid-flow-col bg-white">
          <CatalogIcon />
          <BarIcon />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2" style={{ backgroundColor: "#F5F7FF" }}>
          <div>
            <div className="title">Filters</div>
            <button>ClearFilter</button>
          </div>
          <div>
            <h3 onClick={() => setHiddenCategory(!hiddenCategory)}>Category</h3>
            {hiddenCategory && (
              <ul>
                <li>CUSTOM PCS</li>
                <li>MSI ALL-IN-ONE PCS</li>
                <li>HP/COMPAQ PCS</li>
              </ul>
            )}
          </div>
          <div>
            <h2 onClick={() => setHiddenPrice(!hiddenPrice)}>Price</h2>
            {hiddenPrice && (
              <ul>
                <li>$0.00 - $1,000.00</li>
                <li>$1,000.00 - $2,000.00</li>
                <li>$2,000.00 - $3,000.00</li>
                <li>$3,000.00 - $4,000.00</li>
                <li>$4,000.00 - $5,000.00</li>
                <li>$5,000.00 - $6,000.00</li>
                <li>$6,000.00 - $7,000.00</li>
                <li>$7,000.00 And Above</li>
              </ul>
            )}
          </div>
        </div>
        <div className="grid col-span-10">
          <div className="mt-6 mx-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 hidden">
            {slice.map((product: any, index) => {
              return <Product data={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
