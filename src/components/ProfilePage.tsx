"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { PiFastForwardBold } from "react-icons/pi";

interface ProfileCreationProps {
  handleLoginStep2: () => void;
  handleLoginStep0: () => void;
}

const ProfileCreation = ({
  handleLoginStep2,

  handleLoginStep0,
}: ProfileCreationProps) => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setAvatar(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    console.log("Avatar:", avatar); // Check the value of avatar
    if (!avatar) {
      alert("Please select an avatar before proceeding.");
    } else {
      handleLoginStep2();
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start px-4 ">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mt-20">
          Welcome! Let&apos;s create your profile
        </h1>
        <p className="text-sm text-gray-500 mt-5 font-normal">
          Let others get to know you better! You can do this later
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 my-5">
        <div className="relative">
          <label className="font-bold text-xl mb-10  ml-14  " htmlFor="image">
            Add an avatar
          </label>
          <label htmlFor="image" className="cursor-pointer">
            <div className="flex justify-center items-center rounded-full h-60 w-60 border-dotted border-4 border-gray-300 mt-4 ">
              {avatar ? (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={800}
                  height={800}
                  className="rounded-full  h-60 w-60 object-cover "
                />
              ) : (
                <span className="text-gray-500 ">
                  <RiImageAddFill size={30} />
                </span>
              )}
              <input
                type="file"
                id="image"
                className="opacity-0 h-60 w-60 absolute inset-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
          </label>
        </div>

        <div className="flex flex-col  sm:gap-5 items-center mt-4 sm:mt-0">
          <label
            htmlFor="image"
            className="py-1.5 border-gray-100 hover:bg-gray-100 border-2 px-2 font-semibold rounded-lg cursor-pointer text-center"
          >
            Choose Image
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <div className="text-gray-500 flex gap-1 items-center justify-center">
            <MdKeyboardArrowRight size={23} />
            <div className="cursor-pointer hover:underline">
              Or choose one of our defaults
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="font-bold text-xl md:text-start text-center ">
            Add your location
          </h1>
          <input
            required
            type="text"
            id="location"
            placeholder="New Delhi"
            className="rounded-md placeholder:text-gray-400 border  border-gray-300 p-2  pl-5 outline-none text-xl font-medium text-gray-700 shadow-sm h-10 mt-8 w-full"
          />

          <Button
            onClick={handleButtonClick}
            disabled={!avatar}
            title="Next"
            className={`"text-center relative hidden md:block font-bold mt-10" ${
              !avatar && "cursor-not-allowed"
            }`}
          />
          <div className="text-gray-500 hover:underline text-start  hidden md:block font-bold  cursor-pointer absolute ml-8   text-xs pb-10 ">
            Or Please RETURN
          </div>
        </div>

        <Button
          disabled={!avatar}
          onClick={handleButtonClick}
          title="Next"
          className="md:hidden text-center font-bold mt-10  "
        />
        <div className="text-gray-500 hover:underline text-start  md:hidden   font-bold  cursor-pointer absolute ml-2   text-xs mt-52 ">
          Or Please RETURN
        </div>
      </div>

      <div
        onClick={handleLoginStep2}
        className="absolute bg-gray-100 hover-bg-gray-200 py-1 px-1 rounded-lg text-gray-500 top-10 right-5 cursor-pointer  justify-center items-center font-bold hidden md:flex "
      >
        <PiFastForwardBold />
        <div>Skip</div>
      </div>

      <MdKeyboardArrowLeft
        size={30}
        className="mt-10 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg absolute sm:top-3 top-24 left-5 sm:left-16 lg:left-32 hidden md:flex "
        onClick={handleLoginStep0}
      />
    </section>
  );
};

export default ProfileCreation;
