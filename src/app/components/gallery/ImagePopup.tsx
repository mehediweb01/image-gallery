import React, { FC } from "react";
import Image from "next/image";

const ImagePopup: FC<{ url: string; updatePopup: () => void }> = ({
  url,
  updatePopup,
}) => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-transparent z-50">
      <div className="w-full min-h-screen flex justify-center items-center absolute top-0 left-0 bg-slate-950/50 z-50">
        <div className="w-full max-w-md bg-slate-100 p-5 rounded space-y-2.5">
          <div className="flex justify-between items-start gap-5">
            <div className="w-full space-y-4">
              <Image
                src={url}
                alt="image not found"
                height={800}
                width={800}
                className="h-full w-full"
              />
            </div>
            <button onClick={updatePopup} className="active:translate-y-0.5">
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
