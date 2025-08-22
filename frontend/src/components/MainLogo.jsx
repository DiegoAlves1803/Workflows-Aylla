import React from "react";

const MainLogo = () => {
  return (
    <div className="w-[80px] h-16 flex items-center justify-center">
      {/* Main Logo SVG Components - Larger Version */}
      <div className="flex items-center scale-150">
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/pzsksyw8_Vector.svg" 
          alt="Main Logo Vector" 
          className="h-8 w-auto"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/4qqszf7d_Clip%20path%20group%20%281%29.svg" 
          alt="Main Logo Clip Path 1" 
          className="h-8 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/hpnx4bs3_Vector%20%281%29.svg" 
          alt="Main Logo Vector 1" 
          className="h-8 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/28jgu7ln_Clip%20path%20group%20%282%29.svg" 
          alt="Main Logo Clip Path 2" 
          className="h-8 w-auto -ml-1"
        />
        <img 
          src="https://customer-assets.emergentagent.com/job_schooldata-ai/artifacts/ur14r8yt_Vector%20%282%29.svg" 
          alt="Main Logo Vector 2" 
          className="h-8 w-auto -ml-1"
        />
      </div>
    </div>
  );
};

export default MainLogo;