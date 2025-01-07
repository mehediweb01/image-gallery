import React from "react";
import Index from "./nav";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500/50">
      <div className="font-serif bg-black shadow-md shadow-green-400 px-4 py-6 rounded-lg sm:w-1/2 w-full mx-2">
        <Index />
      </div>
    </div>
  );
};

export default HomePage;
