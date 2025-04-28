import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  const handleSignupClick = () => {
    setTimeout(() => {
      navigate("/signup");
    }, 100);
  };

  return (
    <div>
      <div className="bg-[#F7F8F9] w-[375px] h-[812px] mx-auto shadow-lg overflow-auto flex flex-col justify-end ">
        <div className="mb-[25px] ml-[20px] ">
          <h1 className="text-[#1D2226] text-[28px] font-medium">
            Welcome to PopX
          </h1>
          <p className="text-[#1D2226] opacity-[60%] text-[18px]   ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mb-[41px] ">
          <button
            onClick={handleSignupClick}
            className="text-[18px] cursor-pointer w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] opacity-100"
          >
            Create Account
          </button>
          <button
            onClick={handleLoginClick}
            className="text-[18px] cursor-pointer w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] mt-[10px] opacity-100"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
