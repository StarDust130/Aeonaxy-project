"use client";
import Button from "./Button";
import CheckboxCard from "./CheckBox";
import data from "../components/index";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SelectPage = () => {
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>(
    Array(data.length).fill(false)
  ); // Initialize array of isChecked states

  const handleCardClick = (index: number) => {
    const newIsCheckedArray = [...isCheckedArray]; // Copy the array
    newIsCheckedArray[index] = !newIsCheckedArray[index]; // Toggle the isChecked state of the clicked card
    setIsCheckedArray(newIsCheckedArray); // Update the state
  };
  return (
    <section className="w-screen flex flex-col justify-center items-center h-screen mt-80 sm:mt-20 md:mt-0  my-96  ">
      <div className="flex   flex-col justify-center items-center text-center ">
        <h1 className="md:text-4xl text-2xl mt-20  font-bold">
          What brings you to Aeonaxy Project 🐼?
        </h1>
        <p className="text-sm text-gray-500  font-normal">
          Select the option that describes you. Don&apos;t worry, you can
          explore other options later
        </p>
      </div>

      <div className="grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((item, index) => {
          return (
            <CheckboxCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.img}
              isChecked={isCheckedArray[index]} // Use individual isChecked state for each card
              setIsChecked={() => handleCardClick(index)} // Pass a function to handle isChecked state change
            />
          );
        })}
      </div>

      <div className="flex flex-col   mt-10 justify-center items-center text-center space-y-2">
        <h1 className="font-bold text-xl mb-2">
          Anything else? You can select multiple
        </h1>
        <Button
          title="Finish"
          className={`${
            !isCheckedArray.some((isChecked) => isChecked) // Check if any card is checked
              ? "bg-pink-200 cursor-not-allowed hover:bg-pink-200 text-bold border-none outline-none hover:text-white"
              : ""
          }`}
        />
        <p className="text-gray-500   hover:underline text-xs mt-2">
          or Press RETURN
        </p>
      </div>

      <MdKeyboardArrowLeft
        size={30}
        className="mt-10 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg absolute top-3 left-32"
      />
    </section>
  );
};
export default SelectPage;
