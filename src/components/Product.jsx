import React from "react";

function Product({ product }) {
  const { id, price, title, image, description } = product;
  console.log(image);
  return (
    <div className="flex flex-col clear-start h-[420px] w-[230px] shadow-lg rounded-lg m-15 p-6 items-center hover:[box-shadow:1px_4px_3px_rgb(139,_139,_139)] hover:[transition:all_0.3s] cursor-pointer">
      <img className="h-52 w-44" src={image} />
      <div className="flex flex-col text-center items-center">
        <p className="h-24 text-sm mt-1">{title}</p>
        <h3 className="font-bold items-center ">{price}£</h3>
      </div>
      <div className="flex justify-center">
        <button className="border-none p-2 rounded-lg bg-gray-200 text-black cursor-pointer">
          Details
        </button>
      </div>
    </div>
  );
}

export default Product;
