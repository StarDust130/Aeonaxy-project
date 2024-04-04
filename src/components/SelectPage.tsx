"use client";
import Button from "./Button";
import CheckboxCard from "./CheckBox";
import data from "../components/index";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiFastForwardBold } from "react-icons/pi";

interface SelectPageProps {
  handleLoginStep3: () => void;
  handleLoginStep1: () => void;
}

const SelectPage = ({
  handleLoginStep3,
  handleLoginStep1,
}: SelectPageProps) => {
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>(
    Array(data.length).fill(false)
  ); // Initialize array of isChecked states

  const handleCardClick = (index: number) => {
    const newIsCheckedArray = [...isCheckedArray]; // Copy the array
    newIsCheckedArray[index] = !newIsCheckedArray[index]; // Toggle the isChecked state of the clicked card
    setIsCheckedArray(newIsCheckedArray); // Update the state
  };
  return (
    <section className="w-screen flex flex-col justify-center items-center h-screen mt-40 sm:mt-20 md:mt-0  my-96  ">
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
          disabled={!isCheckedArray.some((isChecked) => isChecked)}
          onClick={handleLoginStep3}
          title="Finish"
          className={`${
            !isCheckedArray.some((isChecked) => isChecked) // Check if any card is checked
              ? "bg-pink-300 cursor-not-allowed hover:bg-pink-300 text-bold border-none outline-none hover:text-white"
              : ""
          }`}
        />
        <p className="text-gray-500   hover:underline text-xs mt-2">
          or Press RETURN
        </p>
      </div>

      <MdKeyboardArrowLeft
        size={30}
        className="mt-10 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg absolute sm:top-3 top-24 left-5 sm:left-16 lg:left-32 hidden md:flex"
        onClick={handleLoginStep1}
      />
      <div
        onClick={handleLoginStep3}
        className="absolute bg-gray-100 hover-bg-gray-200 py-1 px-1 rounded-lg text-gray-500 top-10 right-5 cursor-pointer hidden md:flex justify-center items-center font-bold  "
      >
        <PiFastForwardBold />
        <div>Skip</div>
      </div>
    </section>
  );
};
export default SelectPage;
