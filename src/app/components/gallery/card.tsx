"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { IImage } from "@/types";
import saveIcon from "@/app/img/save.svg";
import saveDone from "@/app/img/save-done.svg";
import ImagePopup from "./ImagePopup";

const ImageCard: FC<IImage> = ({ likes, name, shares, url }) => {
  const [save, setSave] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [totalLike, setTotalLike] = useState(likes);

  const updateLike = (isSave: boolean) => {
    setSave(isSave);
    setTotalLike((prev) => (isSave ? prev + 1 : prev - 1));
  };
  const imagePopUp = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle && <ImagePopup updatePopup={imagePopUp} url={url} />}
      <figure className="relative group overflow-hidden rounded-md">
        <Image
          src={url}
          alt={name}
          onClick={imagePopUp}
          width={500}
          height={500}
          className="w-full object-cover h-[250px] group-hover:scale-105 transition-all duration-200 group-hover:cursor-pointer"
        />
        <figcaption className="absolute -bottom-20 w-full text-center bg-sky-400/50 text-white py-2 invisible group-hover:visible group-hover:bottom-0 transition-all duration-200 group-hover:cursor-pointer">
          <h3 className="font-bold text-sm tracking-wider">{name}</h3>
          <div className="mx-5 flex justify-between items-center gap-5">
            <p className="font-thin text-xs">
              <span>{totalLike} likes</span> | <span>{shares} shares</span>
            </p>
            <Image
              src={save ? saveDone : saveIcon}
              onClick={() => updateLike(!save)}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageCard;
