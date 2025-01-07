import React from "react";
import Image from "next/image";
import search from "@/app/img/search.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full my-8">
      <div className="flex w-full">
        <input
          type="text"
          className="focus:outline-none focus:shadow-inner focus:shadow-cyan-500 pr-8 px-4 py-2 md:w-3/4 w-full rounded-lg font-medium text-base tracking-wide"
        />
        <button className="-ms-6 active:translate-y-0.5 hover:scale-105">
          <Image src={search} alt="" width="15" height="15" />
        </button>
      </div>
      <div>
        <button className="uppercase text-base md:text-xl font-semibold bg-white rounded-md px-4 py-2 active:translate-y-0.5 active:transition-all active:duration-100 text-center hover:bg-blue-300 transition-colors duration-300">
          upload
        </button>
      </div>
    </div>
  );
};

export default Header;
