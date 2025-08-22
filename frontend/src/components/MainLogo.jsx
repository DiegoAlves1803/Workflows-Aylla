import React from "react";

const MainLogo = () => {
  return (
    <div className="w-[80px] h-16 flex items-center justify-center">
      {/* Main Logo Aylla - Versão maior */}
      <img 
        src="/images/aylla-logo.jpg" 
        alt="Aylla Logo Principal" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default MainLogo;