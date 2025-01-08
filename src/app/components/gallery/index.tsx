"use client";
import React from "react";
import ImageCard from "./card";
import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import UploadPopup from "./uploadPopup";
const IndexGallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");
  const upload = params.get("popup") ? true : false;

  const images = data.filter(
    (item) =>
      (search
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : item) && (category ? item.category === category : item)
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full h-fit shadow-md shadow-white bg-white py-4 px-6 rounded-md">
      {upload ? <UploadPopup /> : null}
      {images.length > 0 ? (
        images.map((item) => <ImageCard key={item.id} {...item} />)
      ) : (
        <h2 className="text-slate-600 text-center font-bold text-4xl col-span-4">
          Data Not Found!
        </h2>
      )}
    </div>
  );
};

export default IndexGallery;
