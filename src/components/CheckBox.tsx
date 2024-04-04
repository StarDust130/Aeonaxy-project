"use client";
import Image from "next/image";
// CheckboxCard.tsx

import React from "react";

interface CheckboxCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void; // Callback function to update state
}

const CheckboxCard: React.FC<CheckboxCardProps> = ({
  imageUrl,
  title,
  description,
  isChecked,
  setIsChecked,
}) => {
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsChecked(!isChecked); // Call the callback function to update state
  };

  return (
    <div
      onClick={handleImageClick}
      className={`border p-4 rounded-lg w-64 relative cursor-pointer transition duration-300 ${
        isChecked ? "border-pink-500 mt-8 border-2" : "border-gray-500 mt-5"
      } hover:shadow-lg hover:bg-gray-100`}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt="Image"
          width={500}
          height={500}
          className={`mx-auto mb-2 rounded-lg  object-auto ${
            isChecked ? "" : ""
          }`}
        />
        <h1 className="text-center text-xl font-bold">{title}</h1>
      </div>
      {isChecked && (
        <p className="text-gray-500 text-sm text-center mt-2">{description}</p>
      )}
      <div className="flex justify-center items-center mt-2">
        <input
          type="checkbox"
          checked={isChecked}
          className="mr-2 cursor-pointer hidden"
        />
        <label
          className={`cursor-pointer w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center ${
            isChecked ? "bg-pink-500" : ""
          }`}
        >
          <svg
            className={`w-4 h-4 text-white fill-current ${
              isChecked ? "block" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default CheckboxCard;
