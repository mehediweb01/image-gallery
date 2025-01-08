"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UploadPopup = () => {
  const route = useRouter();
  const close = () => {
    const body = document.querySelector("body");
    route.push("/");
    if (body) {
      body.className = "overflow-scroll";
    }
  };
  return (
    <div className="w-full max-h-screen flex justify-center items-center absolute top-0 left-0 bg-transparent z-50">
      <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bg-slate-950/50 z-50">
        <div className="w-full max-w-md bg-slate-100 p-5 rounded space-y-2.5">
          <div className="flex justify-between items-start gap-5">
            <div className="w-full space-y-4">
              <input
                placeholder="Name..."
                className="border border-slate-400 rounded-md py-2 px-4 w-full"
              />
              <input
                type="file"
                className="border border-slate-400 rounded-md w-full"
              />
              <select
                name="category"
                id="category"
                className="w-full border border-slate-400 rounded-md py-2 px-4"
              >
                <option value="photo">photo</option>
                <option value="vector">vector</option>
              </select>
              <button className="bg-sky-400 px-4 py-2 w-full rounded-md active:translate-y-0.5 transition-all duration-200">
                Upload
              </button>
            </div>
            <button onClick={close} className="active:translate-y-0.5">
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;
