import React from "react";

const Logo = () => {
  return (
    <div className="w-[140px] h-10 flex items-center">
      {/* Nova Logo Aylla - Aumentada */}
      <img 
        src="/images/aylla-logo.jpg" 
        alt="Aylla Logo" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;