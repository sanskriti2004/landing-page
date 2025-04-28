import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // States for input values
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  // Check if the form is valid
  const isFormValid =
    fullName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "";

  const handleLogin = () => {
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };
    localStorage.setItem("reactInternship", JSON.stringify(userData));

    setTimeout(() => {
      navigate("/profile", {
        state: { fullName, email },
      });
    }, 100);
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[812px] mx-auto shadow-lg overflow-auto flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="mb-[25px] ml-[20px] mt-[40px]">
          <h1 className="text-[#1D2226] text-[28px] font-medium">
            Create your
          </h1>
          <h1 className="text-[#1D2226] text-[28px] font-medium mt-[-5px]">
            PopX account
          </h1>
        </div>

        {/* Form */}
        <div className="flex flex-col pl-[20px] mt-[6px] space-y-5">
          {/* Full Name Field */}
          <div className="relative w-[335px] mb-[25px]">
            <label
              htmlFor="full-name"
              className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="w-full h-[40px] px-4 text-[14px]  border border-[#CBCBCB] rounded-[6px] outline-none mb-[3px]"
            />
          </div>

          {/* Phone Number Field */}
          <div className="relative w-[335px] mb-[25px]">
            <label
              htmlFor="phone-number"
              className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              id="phone-number"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="relative w-[335px] mb-[25px]">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none mb-[3px]"
            />
          </div>

          {/* Password Field */}
          <div className="relative w-[335px] mb-[25px]">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none"
            />
          </div>

          {/* Company Name Field */}
          <div className="relative w-[335px] ">
            <label
              htmlFor="company-name"
              className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
            >
              Company name
            </label>
            <input
              id="company-name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none mb-[3px]"
            />
          </div>

          {/* Agency Radio Buttons */}
          <div className="flex flex-col mt-[-7px] ">
            <label className="text-[13px]" htmlFor="agency">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6 mt-2">
              <label className="flex gap-3  text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={isAgency === "Yes"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF] text-[14px] w-[22px] h-[22px]"
                />
                Yes
              </label>
              <label className="flex gap-3 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={isAgency === "No"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF] text-[14px] w-[22px] h-[22px]"
                />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleLogin}
        className={`w-[335px] mb-[25px] ml-[20px] h-[46px] font-medium rounded-[6px] text-white text-[16px] cursor-pointer transition-colors duration-200 ${
          isFormValid ? "bg-[#6C25FF]" : "bg-[#CBCBCB] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;
