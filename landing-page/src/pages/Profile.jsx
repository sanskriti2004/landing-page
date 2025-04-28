import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <div>
      {/* header */}
      <div className="bg-[#F7F8F9] w-[375px] h-[812px] mx-auto shadow-lg overflow-auto flex flex-col justify-start">
        <div
          className="h-[68px] flex justify-start text-[18px] bg-[#FFFFFF] pl-[15px] items-center"
          style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.07)" }}
        >
          Account Settings
        </div>

        {/* Profile Section */}
        <div className="pl-[20px] flex gap-5 mt-[30px]">
          <div className="relative">
            <img
              src="/assets/profile_pic.png"
              className="h-[76px] w-[76px] rounded-full"
              alt="Profile IMG"
            />
            <img
              src="./assets/camera.png"
              className="absolute h-[23px] w-[23px] right-0 bottom-0"
              alt="Camera Icon"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-[15px] font-medium">
              {userData.name || "Marry Doe"}
            </h3>
            <h3 className="text-[14px] ">
              {userData.email || "Marry@Gmail.Com"}
            </h3>
          </div>
        </div>

        {/* Description Section */}
        <div className="px-[20px] mt-[25px] text-[14px] pr-[18px] text-[#1D2226] border-dashed border-gray-300 border-b pb-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </div>
  );
};

export default Profile;
