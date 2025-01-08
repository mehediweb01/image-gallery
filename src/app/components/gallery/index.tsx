import React from "react";
import ImageCard from "./card";
import { data } from "@/lib/db";
const IndexGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full h-fit shadow-lg shadow-white bg-white py-4 px-6 rounded-md ">
      {data.map((item) => (
        <ImageCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default IndexGallery;
