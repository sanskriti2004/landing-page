// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   // State for inputs
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Check if form is valid
//   const isFormValid = email.trim() !== "" && password.trim() !== "";

//   const handleLogin = () => {
//     if (!isFormValid) {
//       alert("Please fill in both email and password.");
//       return;
//     }

//     const userData = {
//       email,
//       password,
//     };
//     localStorage.setItem("reactInternship", JSON.stringify(userData));

//     setTimeout(() => {
//       navigate("/profile");
//     }, 100);
//   };

//   return (
//     <div className="bg-[#F7F8F9] w-[375px] h-[812px] mx-auto shadow-lg overflow-auto flex flex-col justify-start">
//       {/* Header */}
//       <div className="mb-[25px] ml-[20px] mt-[40px]">
//         <h1 className="text-[#1D2226] text-[28px] font-medium">
//           Signin to your
//         </h1>
//         <h1 className="text-[#1D2226] text-[28px] font-medium mt-[-5px]">
//           PopX account
//         </h1>
//         <p className="text-[#1D2226] opacity-[60%] text-[18px] mt-[5px]">
//           Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
//         </p>
//       </div>

//       {/* Form */}
//       <div className="flex flex-col justify-center items-center mt-[6px] space-y-5">
//         {/* Email Field */}
//         <div className="relative w-[335px]">
//           <label
//             htmlFor="email"
//             className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
//           >
//             Email address
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email address"
//             className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none mb-[3px]"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="relative w-[335px]">
//           <label
//             htmlFor="password"
//             className="absolute -top-2 left-3 px-1 bg-[#F7F8F9] text-[#6C25FF] text-[13px]"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             className="w-full h-[40px] px-4 text-[14px] border border-[#CBCBCB] rounded-[6px] outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleLogin}
//           className={`w-[335px] mt-[-4px] h-[46px] rounded-[6px] text-white text-[16px] cursor-pointer transition-colors duration-200 ${
//             isFormValid ? "bg-[#6C25FF]" : "bg-[#CBCBCB] cursor-not-allowed"
//           }`}
//           disabled={!isFormValid}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
