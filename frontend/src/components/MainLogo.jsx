import React from "react";

const MainLogo = () => {
  return (
    <div className="w-[69px] h-16 relative">
      {/* Left side elements */}
      <div className="absolute w-[33.07px] h-[42.43px] left-0 top-[21.57px] bg-black"></div>
      <div 
        className="absolute w-[36.27px] h-[43.20px] left-[-3.20px] top-[21.59px]"
        style={{ background: "linear-gradient(90deg, #07C9FD 0%, #08215D 100%)" }}
      ></div>
      <div className="absolute w-[11.93px] h-[11.88px] left-[31.80px] top-[49.56px] bg-[#08215D]"></div>
      
      {/* Right side elements */}
      <div className="absolute w-[35.31px] h-[43.20px] left-[33.69px] top-0 bg-black"></div>
      <div 
        className="absolute w-[38.39px] h-[43.20px] left-[33.71px] top-[-0.02px]"
        style={{ background: "linear-gradient(90deg, #08215D 0%, #07C9FD 100%)" }}
      ></div>
      <div className="absolute w-[12.24px] h-[12.19px] left-[23.73px] top-[3.64px] bg-[#08215D]"></div>
      
      {/* Center element */}
      <div className="absolute w-[25.83px] h-[19.53px] left-[21.20px] top-[23.59px] bg-black"></div>
      <div 
        className="absolute w-[25.82px] h-[19.52px] left-[21.21px] top-[23.59px]"
        style={{ background: "linear-gradient(90deg, #07C9FD 0%, #08215D 100%)" }}
      ></div>
    </div>
  );
};

export default MainLogo;