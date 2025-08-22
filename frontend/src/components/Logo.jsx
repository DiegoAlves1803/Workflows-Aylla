import React from "react";

const Logo = () => {
  return (
    <div className="relative w-[103px] h-6">
      {/* Background elements */}
      <div 
        className="absolute w-[72.43px] h-[14.31px] left-[30.57px] top-[5.10px] bg-[#08215D]"
      ></div>
      
      {/* Left icon elements */}
      <div className="absolute w-[12.47px] h-[15.91px] left-0 top-[8.09px] bg-black"></div>
      <div 
        className="absolute w-[13.68px] h-[16.20px] -left-[1.21px] top-[8.09px]"
        style={{ background: "linear-gradient(90deg, #07C9FD 0%, #08215D 100%)" }}
      ></div>
      <div className="absolute w-[4.50px] h-[4.46px] left-[11.99px] top-[18.59px] bg-[#08215D]"></div>
      
      {/* Right icon elements */}
      <div className="absolute w-[13.32px] h-[16.20px] left-[12.71px] top-0 bg-black"></div>
      <div 
        className="absolute w-[14.48px] h-[16.20px] left-[12.71px] top-[-0.01px]"
        style={{ background: "linear-gradient(90deg, #08215D 0%, #07C9FD 100%)" }}
      ></div>
      <div className="absolute w-[4.62px] h-[4.57px] left-[8.95px] top-[1.37px] bg-[#08215D]"></div>
      
      {/* Center element */}
      <div className="absolute w-[9.74px] h-[7.32px] left-[7.99px] top-[8.85px] bg-black"></div>
      <div 
        className="absolute w-[9.74px] h-[7.32px] left-2 top-[8.85px]"
        style={{ background: "linear-gradient(90deg, #07C9FD 0%, #08215D 100%)" }}
      ></div>
    </div>
  );
};

export default Logo;