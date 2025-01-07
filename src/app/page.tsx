import React from "react";
import Index from "./components/nav";
import Header from "./components/header";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500/50">
      <div className="font-serif bg-black shadow-md shadow-green-400 px-4 py-6 rounded-lg sm:w-3/4 w-full mx-2">
        <Index />
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
