/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import ImageCard from "./card";
import { data } from "@/lib/db";
import { useRouter, useSearchParams } from "next/navigation";
import UploadPopup from "./uploadPopup";
import { IImage, TCategory } from "@/types";

const IndexGallery = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");
  const upload = params.get("popup") ? true : false;
  const route = useRouter();
  useEffect(() => {
    const filterData = data.filter(
      (item) =>
        (search
          ? item.name.toLowerCase().includes(search.toLowerCase())
          : item) && (category ? item.category === category : item)
    );
    setImages(filterData);
  }, [category, search]);

  const close = () => {
    const body = document.querySelector("body");
    route.push("/");
    if (body) {
      body.className = "overflow-scroll";
    }
  };

  const addNewItem = (name: string, category: TCategory, file: File) => {
    const render = new FileReader();
    render.onload = (e) => {
      const imageId = images.length.toString();
      const newImage = {
        id: imageId,
        name,
        category,
        url: e.target?.result as any,
        likes: 35,
        shares: 1,
      };
      setImages((prev) => [...prev, newImage]);
      close();
    };
    render.readAsDataURL(file);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center w-full h-fit shadow-md shadow-white bg-white py-4 px-6 rounded-md">
      {upload && <UploadPopup submit={addNewItem} close={close} />}
      {images.length > 0 ? (
        images.map((item) => (
          <div key={item.id}>
            <ImageCard key={item.id} {...item} />
          </div>
        ))
      ) : (
        <h2 className="text-slate-600 text-center font-bold text-4xl col-span-4">
          Data Not Found!
        </h2>
      )}
    </div>
  );
};

export default IndexGallery;
