import Link from "next/link";
import React from "react";
import Item from "./item";

const navItem = [
  {
    url: "/?category=photo",
    label: "Photo",
  },
  {
    url: "/?category=vector",
    label: "Vector",
  },
];

const Index = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-2 gap-4 border-b border-slate-300 rounded-md pb-4">
      <div>
        {/* logo */}
        <Link
          href="/"
          className="uppercase border border-slate-300 p-2 rounded-md text-white font-semibold text-3xl tracking-widest"
        >
          gallery
        </Link>
      </div>
      {/* nav item */}
      <div className="flex space-x-3 text-white font-semibold text-xl">
        {navItem.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Index;
