import Link from "next/link";
import React, { FC } from "react";

type TProps = { url: string; label: string };
const Item: FC<TProps> = ({ url, label }) => {
  return (
    <div>
      <Link
        href={url}
        className=" pb-2 relative group z-20  after:content-[''] after:absolute after:bg-slate-600 after:h-px after:w-full after:hover:h-full after:rounded-md transition-all after:transition-all after:left-0 after:bottom-1 after:-z-20 px-3 py-1 after:duration-200"
      >
        {label}
      </Link>
    </div>
  );
};

export default Item;
