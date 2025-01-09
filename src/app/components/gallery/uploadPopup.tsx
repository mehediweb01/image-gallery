"use client";
import { TCategory } from "@/types";
import React, { FC, useState } from "react";
interface Props {
  submit: (name: string, category: TCategory, file: File) => void;
  close: () => void;
}
const UploadPopup: FC<Props> = ({ submit, close }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("photo");
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = () => {
    if (name && category && file) submit(name, category as TCategory, file);
    setName("");
    setCategory("photo");
    setFile(null);
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
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="file"
                className="border border-slate-400 rounded-md w-full"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <select
                name="category"
                id="category"
                className="w-full border border-slate-400 rounded-md py-2 px-4"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="photo">photo</option>
                <option value="vector">vector</option>
              </select>
              <button
                className="bg-sky-400 px-4 py-2 w-full rounded-md active:translate-y-0.5 transition-all duration-200"
                onClick={handleSubmit}
              >
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
