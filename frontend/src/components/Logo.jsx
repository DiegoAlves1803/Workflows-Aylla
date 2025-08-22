import React from "react";

const Logo = () => {
  return (
    <div className="relative w-[120px] h-8 flex items-center gap-2">
      {/* Logo SVG Components */}
      <div className="flex items-center">
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/pzsksyw8_Vector.svg" 
          alt="Logo Vector" 
          className="h-6 w-auto"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/4qqszf7d_Clip%20path%20group%20%281%29.svg" 
          alt="Logo Clip Path 1" 
          className="h-6 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/hpnx4bs3_Vector%20%281%29.svg" 
          alt="Logo Vector 1" 
          className="h-6 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/28jgu7ln_Clip%20path%20group%20%282%29.svg" 
          alt="Logo Clip Path 2" 
          className="h-6 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/ur14r8yt_Vector%20%282%29.svg" 
          alt="Logo Vector 2" 
          className="h-6 w-auto -ml-1"
        />
      </div>
    </div>
  );
};

export default Logo;