import React from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"; // react-icons proyojon

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
      
        <p className="text-6xl md:text-8xl font-black text-[#234e3f] animate-bounce">404</p>
        
        {/* Error Message */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1a2b3c] sm:text-5xl">Page not found</h1>
        
        <p className="mt-6 text-base leading-7 text-gray-500 max-w-md mx-auto">Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="btn bg-[#234e3f] hover:bg-[#1a3a2f] text-white border-none px-8 normal-case flex items-center gap-2">
            <HiOutlineArrowNarrowLeft size={18} />Go back home
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default ErrorPage;