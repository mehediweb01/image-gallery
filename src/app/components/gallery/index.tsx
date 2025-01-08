"use client";
import React from "react";
import ImageCard from "./card";
import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";
const IndexGallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  console.log(category);
  const image = data.filter((item) =>
    category ? item.category === category : item
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full h-fit shadow-lg shadow-white bg-white py-4 px-6 rounded-md ">
      {image.map((item) => (
        <ImageCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default IndexGallery;
