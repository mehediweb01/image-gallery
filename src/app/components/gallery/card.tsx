import Image from "next/image";
import React, { FC } from "react";
import { IImage } from "@/types";
const ImageCard: FC<IImage> = ({ likes, name, shares, url }) => {
  return (
    <div>
      <figure className="relative group overflow-hidden rounded-md">
        <Image
          src={url}
          alt={name}
          width={500}
          height={500}
          className="w-full object-cover h-[250px] group-hover:scale-105 transition-all duration-200 group-hover:cursor-pointer"
        />
        <figcaption className="absolute -bottom-20 w-full text-center bg-slate-800/50 text-white py-2 invisible group-hover:visible group-hover:bottom-0 transition-all duration-200 group-hover:cursor-pointer">
          <h3 className="font-bold text-sm tracking-wider">{name}</h3>
          <p className="font-thin text-xs">
            <span>{likes} likes</span> | <span>{shares} shares</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageCard;
