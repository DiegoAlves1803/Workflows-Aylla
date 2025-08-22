import React from "react";

const Logo = () => {
  return (
    <div className="w-[120px] h-8 flex items-center">
      {/* Nova Logo Aylla */}
      <img 
        src="/images/aylla-logo.jpg" 
        alt="Aylla Logo" 
        className="h-6 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;